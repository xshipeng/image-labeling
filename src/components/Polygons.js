import React, { Component } from 'react';
import { Group, Line } from 'react-konva';

class Polygons extends Component {
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
    render() {
        // console.log(this.props.labels);
        let polygons = this.props.labels.map((polygon) => {
            let pointsArray = polygon.points.reduce((pointsArray, point) => {
                pointsArray.push(this.convertRealXtoClientX(point.x));
                pointsArray.push(this.convertRealYtoClientY(point.y));
                return pointsArray;
            }, []);
            return(
                <Line
                    ref={"polygon" + polygon.id}
                    key={polygon.id}
                    points={pointsArray}
                    stroke="red"
                    strokeWidth="2"
                    closed="true"
                />
            );
        });
        return (
            <Group>
                
                {polygons}
            </Group>
        );
    }
}

export default Polygons;