import React, { Component } from 'react'
import ImageContainer from './ImageContainer.js'
import { Stage, Layer } from "react-konva";
import BoundingBox from './BoundingBox.js';
class ImageLabel extends Component {
    constructor() {
        super();
        this.state = {
            isDrawing: false,
            history: Array(0).fill(null),
        }
    }
    handleMouseDown = () => {
        this.setState({
            isDrawing: !this.state.isDrawing,
        });
        let history = this.state.history;
        if (this.state.isDrawing) {
            let rectNumber = this.state.rectNumber + 1;
            const stage = this.refs.stage.getStage();
            this.lastPointerPosition = stage.getPointerPosition();
            history.push({
                rectId: this.state.history.length + 1,
                x: this.lastPointerPosition.x,
                y: this.lastPointerPosition.y,
                width: 0,
                height: 0,
            }
            );
            this.setState({
                history: history,
            });
        }
        else {
            console.log(this.refs);
        }
    }
    handleMouseMove = () => {
        if (this.state.isDrawing) {
            let history = this.state.history.slice();
            const stage = this.refs.stage.getStage();
            this.lastPointerPosition = stage.getPointerPosition();

            let rectNumber = this.state.history.length;
            history[rectNumber - 1].width = this.lastPointerPosition.x - history[rectNumber - 1].x;
            history[rectNumber - 1].height = this.lastPointerPosition.y - history[rectNumber - 1].y;;
            this.setState({
                history: history,
            })
        }
    }
    handleUndo=()=>{
        let history=this.state.history.slice();
        history.pop();
        this.setState({
            history:history,
        })
    }
    handleSave=()=>{
        const stage=this.refs.stage.getStage();
        stage.toDataURL('image/jpeg');
    }
    render() {
        const history = this.state.history;
        const rects = history.map((rect) => {
            return (
                <BoundingBox
                    ref={"rect" + rect.rectId}
                    key={rect.rectId}
                    x={rect.x}
                    y={rect.y}
                    width={rect.width}
                    height={rect.height} />
            );

        });
        return (
            <div>
                <div>Image Label</div>
                <Stage ref="stage"
                    width="640"
                    height="350"
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}>
                    <Layer>
                        <ImageContainer />
                        {rects}
                    </Layer>
                </Stage>
                <button onClick={this.handleUndo}>
                    Undo
                    </button>
            </div>
        );
    }
}

export default ImageLabel;