import React, { Component } from 'react';
import { Image, Circle, Layer } from "react-konva";
class CroppedImage extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            x: null,
            y: null,
        };
    }


    convertClientXtoRealX = (x) => {
        return x / this.props.imageProps.clientWidth * this.props.imageProps.realWidth;
    }
    convertClientYtoRealY = (y) => {
        return y / this.props.imageProps.clientHeight * this.props.imageProps.realHeight;
    }

    componentDidMount() {
        const image = new window.Image();
        console.log(this.props.imageProps);
        image.src = this.props.imageProps.imageUrl;
        image.onload = () => {
            this.setState({
                image: image,
            });

        };
        image.onerror = () => {
            image.src = this.props.imageProps.imageUrl;
        };

    }


    render() {
        return (
            <Layer>
                <Image
                    ref="croppedimage"
                    crop={{
                        x: this.convertClientXtoRealX(this.props.x - 10),
                        y: this.convertClientYtoRealY(this.props.y - 10),
                        width: this.convertClientXtoRealX(20),
                        height: this.convertClientYtoRealY(20)
                    }}
                    x={this.props.x + 10}
                    y={this.props.y + 10}
                    width="100"
                    height="100"
                    image={this.state.image} />
                <Circle
                    x={this.props.x + 60}
                    y={this.props.y + 60}
                    fill="red"
                    radius="2.5" />
            </Layer>
        );
    }
}

export default CroppedImage;