import React, { Component } from 'react';
import ImageContainer from './ImageContainer.js';
import { Stage, Layer } from "react-konva";
import BoundingBoxes from './BoundingBoxes.js';
import BoundingBox from './BoundingBox.js';

class ImageLabelView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false,
            currentBoxId: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        }
    }
    handleMouseDown = () => {

        if (!this.state.isDrawing) {
            this.setState({
                isDrawing: !this.state.isDrawing,
            });
            const stage = this.refs.stage.getStage();
            this.lastPointerPosition = stage.getPointerPosition();
            this.setState({
                currentBoxId: this.state.currentBoxId + 1,
                x: this.lastPointerPosition.x,
                y: this.lastPointerPosition.y,
                width: 0,
                height: 0,
            }
            );

        }
    }
    handleMouseMove = () => {
        if (this.state.isDrawing) {
            const stage = this.refs.stage.getStage();
            this.lastPointerPosition = stage.getPointerPosition();
            this.setState({
                width: this.lastPointerPosition.x - this.state.x,
                height: this.lastPointerPosition.y - this.state.y,
            })
        }
    }
    handleMouseUp = () => {
        if (this.state.isDrawing) {
            this.setState({
                isDrawing: !this.state.isDrawing,
            })
            this.props.addCurrentBox(this.state.currentBoxId,
                {
                    x: this.state.x,
                    y: this.state.y,
                    width: this.state.width,
                    height: this.state.height,
                }
            );
            this.setState({
                x:0,
                y:0,
                width:0,
                height: 0,

            })
        }
    }
    render() {
        let boxesToRender = this.props.boxes.slice(0);
        // let boxesToRender = [];
        boxesToRender.push({
            id: 100,
            position: {
                x: this.state.x,
                y: this.state.y,
                width: this.state.width,
                height: this.state.height,
            }
        });
        return (
            <div>
                <div>Image Label</div>
                <Stage ref="stage"
                    width="640"
                    height="350"
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handleMouseUp}>
                    <Layer>
                        <ImageContainer />
                        <BoundingBoxes boxes={boxesToRender.slice()} />
                    </Layer>
                </Stage>
                <p>
                    <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>
                        Undo
                    </button>
                    <button onClick={this.props.onRedo} disabled={!this.props.canRedo}>
                        Redo
                    </button>
                </p>
            </div>
        );
    }
}

export default ImageLabelView;