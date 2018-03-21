import React, { Component } from 'react';
import { Layer, Circle, Line, Stage, Image } from 'react-konva';
import Polygons from './Polygons.js'
import CroppedImage from './CroppedImage.js'

class AddPolygon extends Component {
    constructor() {
        super();

        this.state = {
            stageWidth: 300,
            stageHeight: 300,
            currentId: 0,
            points: [],
            lineClosed: false,
            pointer: {
                x: 0,
                y: 0,
            }
        }
    }

    convertClientXtoRealX = (x) => {
        return x / this.props.imageProps.clientWidth * this.props.imageProps.realWidth;
    }
    convertClientYtoRealY = (y) => {
        return y / this.props.imageProps.clientHeight * this.props.imageProps.realHeight;
    }
    convertRealXtoClientX = (x) => {
        return x / this.props.imageProps.realWidth * this.props.imageProps.clientWidth;
    }
    convertRealYtoClientY = (y) => {
        return y / this.props.imageProps.realHeight * this.props.imageProps.clientHeight;
    }
    handleMouseDown = () => {
        let stage = this.refs.stage.getStage();
        let lastPointerPosition = stage.getPointerPosition();
        let points = this.state.points.slice();
        if (this.equalPoint(lastPointerPosition, this.state.points[0])) {
            this.props.addCurrentLabel(this.state.currentId, "polygon", this.state.points);
            this.setState({
                currentId: this.state.currentId + 1,
                lineClosed: false,
                points: [],
            });
        }
        else {
            points.push({
                x: this.convertClientXtoRealX(lastPointerPosition.x),
                y: this.convertClientYtoRealY(lastPointerPosition.y)
            })
            this.setState({
                points: points
            });
        }

    }
    handleMouseMove = () => {
        const stage = this.refs.stage.getStage();
        let lastPointerPosition = stage.getPointerPosition();
        this.setState({
            pointer: {
                x: lastPointerPosition.x,
                y: lastPointerPosition.y,
            }
        })
    }
    equalPoint = (currentPoint, initPoint) => {
        if (currentPoint && initPoint) {
            return Math.abs(currentPoint.x - this.convertRealXtoClientX(initPoint.x)) < 5 && Math.abs(currentPoint.y - this.convertRealXtoClientX(initPoint.y)) < 5;
        }
        else {
            return false;
        }
    }
    render() {
        let pointsToRender = this.state.points.map((point, id) => (
            <Circle

                ref={"point" + id}
                key={"point" + id}
                x={this.convertRealXtoClientX(point.x)}
                y={this.convertRealYtoClientY(point.y)}
                fill="red"
                radius="2.5" />
        ));
        let pointsArray = this.state.points.reduce((pointsArray, point) => {
            pointsArray.push(this.convertRealXtoClientX(point.x));
            pointsArray.push(this.convertRealYtoClientY(point.y));
            return pointsArray;
        }, []);
        return (
            <div>
                <Stage ref="stage"
                    x={0}
                    y={0}
                    width={this.props.imageProps.clientWidth}
                    height={this.props.imageProps.clientHeight}>
                    <Layer ref="layer"
                        onMouseDown={this.handleMouseDown}
                        onMouseMove={this.handleMouseMove}
                    >
                        <Image
                            width={this.props.imageProps.clientWidth}
                            height={this.props.imageProps.clientHeight}
                            stroke="red" />
                        <Line
                            ref="line"
                            points={pointsArray}
                            stroke="red" />
                        {pointsToRender}
                        <Polygons labels={this.props.labels.slice()} 
                        imageProps={this.props.imageProps}/>
                        {/* <CroppedImage
                            src={this.props.imageProps.imageUrl}
                            x={this.state.pointer.x}
                            y={this.state.pointer.y}
                        /> */}
                    </Layer>


                </Stage>
            </div>
        );
    }
}

export default AddPolygon;