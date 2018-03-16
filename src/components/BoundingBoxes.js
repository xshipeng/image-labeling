import React, {Component} from 'react';
import BoundingBox from './BoundingBox.js';
import { Group,Layer } from 'konva';

class BoundingBoxes extends Component {
    render() {
        const boxes=this.props.boxes;
        let rects = boxes.map((box)=>(
            <BoundingBox
            ref={"rect" + box.id}
            key={box.id}
            x={box.position.x}
            y={box.position.y}
            width={box.position.width}
            height={box.position.height} />
        ));
        if(this.props.boxes.length===0){
            return null;
        }
        else{
            return rects;
        }
    }
}

export default BoundingBoxes;