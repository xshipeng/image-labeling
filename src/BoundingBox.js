import React, { Component } from 'react'
import { Rect } from "react-konva";

class BoundingBox extends Component {
    render() {
        return (
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                fill='rgba(0,0,0,0)'
                stroke='red'
                strokeWidth={2}
            />
        );
    }

}

export default BoundingBox;