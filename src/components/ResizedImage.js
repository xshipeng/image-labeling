import React, { Component } from 'react';
import { Image } from 'react-konva';
import axios from 'axios';

class ResizedImage extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            actualImageWidth: 0,
            actualImageHeight: 0,
            clientHeight: 50,
            clientWidth: 50,
            imageUrls: null,
            imageIndex: 0,
            imageUrl:null
        }
    }
    getNextImage = () => {
        const imageUrl = this.state.imageUrls[this.state.imageIndex].imageUrl;
        this.setState({
            imageUrl:imageUrl,
            imageIndex: this.state.imageIndex + 1,
        });
        const image = new window.Image();
        image.src = imageUrl;
        // console.log(image.src);
        image.onload = () => {
            this.setState({
                image: image,
                actualImageWidth: image.width,
                actualImageHeight: image.height,
            });
            this.changeSize();
        }

    }

    getImageUrls = () => {
        axios
            .get("http://127.0.0.1:8000/images")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    imageUrls: res.data,
                });
                this.getNextImage();
            })
    };

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
            this.state.imageUrl,
            this.state.clientHeight, this.state.clientWidth,
            this.state.actualImageHeight, this.state.actualImageWidth);
    }
    componentDidMount() {
        window.addEventListener('resize', this.changeSize);
        this.getImageUrls();
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