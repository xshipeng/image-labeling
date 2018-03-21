import React, { Component } from 'react';
import ImageContainer from '../containers/ImageContainer.js';
import { Stage, Layer } from "react-konva";
import BoundingBoxes from './BoundingBoxes.js';
import BoundingBox from './BoundingBox.js';
import CroppedImage from './CroppedImage.js'

class AddRect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false,
            currentBoxId: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            pointer: {
                x: 0,
                y: 0,
            }
        }
    }
    componentDidMount() {
        let layer = this.refs.layer;
        layer.width(700);
        layer.width(400);
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
        const stage = this.refs.stage.getStage();
        this.lastPointerPosition = stage.getPointerPosition();
        this.setState({
            pointer: {
                x: this.lastPointerPosition.x,
                y: this.lastPointerPosition.y,
            }
        })
        if (this.state.isDrawing) {

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
                x: 0,
                y: 0,
                width: 0,
                height: 0,

            })
        }
    }
    render() {
        return (
            <div>
                <Stage ref="stage"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handleMouseUp}>
                    <Layer ref="layer">
                        <ImageContainer />
                        <BoundingBoxes boxes={this.props.boxes.slice()} />
                       
                       
                    </Layer>
                    <BoundingBox x={this.state.x}
                            y={this.state.y}
                            width={this.state.width}
                            height={this.state.height} />
                    <CroppedImage 
                        x={this.state.pointer.x}
                            y={this.state.pointer.y} />
                </Stage>
              </div>
        );
    }
}

export default AddRect;