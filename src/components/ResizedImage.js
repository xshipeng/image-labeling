import React, { Component } from 'react';
import { Image } from 'react-konva';

class ResizedImage extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            actualImageWidth: 0,
            actualImageHeight: 0,
            clientHeight: 50,
            clientWidth: 50,

        }
    }

    loadImage = (imageUrl) => {
        let image = new window.Image();
        image.src = imageUrl;
        console.log(imageUrl);
        image.onload = () => {
            this.setState({
                image: image,
                actualImageWidth: image.width,
                actualImageHeight: image.height,
            });
            image.onerror=()=>{
                console.log("image loading failed");
            }
            this.changeSize();
        }

    }

    changeSize = () => {
        const container = document.getElementById("imagelabelcontainer");
        let scaleX = this.state.actualImageWidth / container.clientWidth;
        let scaleY = this.state.actualImageHeight / container.clientHeight;
        if (scaleX < scaleY) {
            this.setState({
                clientHeight: container.clientHeight,
                clientWidth: this.state.actualImageWidth / scaleY,
            })
        }
        else {
            this.setState({
                clientHeight: this.state.actualImageHeight / scaleX,
                clientWidth: container.clientWidth,
            })
        }
        this.props.setImageProps(
            this.state.clientHeight, this.state.clientWidth,
            this.state.actualImageHeight, this.state.actualImageWidth);
    }
    componentDidMount() {
        window.addEventListener('resize', this.changeSize);
        this.loadImage(require("../404.png"));
    }
    componentDidUpdate() {
        if (this.state.image) {
            if (this.props.imageUrl !== this.state.image.src) {
                this.loadImage(this.props.imageUrl);
            }
        }


    }

    render() {
        return (
            <Image image={this.state.image}
                height={this.state.clientHeight}
                width={this.state.clientWidth} name="image" />
        );
    }
}

export default ResizedImage;