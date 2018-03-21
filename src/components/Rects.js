import React, { Component } from 'react';
import { Group, Layer, Rect } from 'react-konva';

class Rects extends Component {
    render() {
        const boxes = this.props.boxes;
        let rects = boxes.map((box) => (
            <Rect
                ref={"rect" + box.id}
                key={box.id}
                x={box.position.x}
                y={box.position.y}
                width={box.position.width}
                height={box.position.height}
                fill='rgba(0,0,0,0)'
                stroke='red'
                strokeWidth={2} />
        ));
        if (this.props.boxes.length == 0) {
            return null;
        }
        else {
            return rects;
        }
    }
}

export default Rects;