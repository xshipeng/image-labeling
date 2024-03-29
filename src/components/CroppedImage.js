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


    loadImage = () => {
        const image = new window.Image();
        image.src = this.props.imageProps.imageUrl ? this.props.imageProps.imageUrl : require("../people-02.jpg");;
        image.onload = () => {
            this.setState({
                image: image,
            });
        };
        image.onerror = () => {
            console.log("loding image failed!");
        };
    }

    componentDidMount() {
        this.loadImage();
    }
    componentDidUpdate() {
        if (this.state.image) {
            if (this.props.imageProps.imageUrl !== this.state.image.src) {
                this.loadImage();
            }
        }


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
                    image={this.state.image}
                    stroke="red" />
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