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
    componentDidMount() {
        const image = new window.Image();
        image.src = require("../people-02.jpg");
        image.onload = () => {
            this.setState({
                image: image,
                actualImageWidth: image.width,
                actualImageHeight: image.height,
            });
            this.changeSize();
        }
        window.addEventListener('resize', this.changeSize);
    }
    changeSize = () => {
        const container = document.getElementById("imagelabelcontainer");
        let scaleX=this.state.actualImageWidth / container.clientWidth;
        let scaleY=this.state.actualImageHeight / container.clientHeight;
        if ( scaleX< scaleY ) {
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
        this.props.setImageProps(this.state.image.src,
            this.state.clientHeight, this.state.clientWidth,
            this.state.actualImageHeight, this.state.actualImageWidth);
    }
    render() {
        return (
            <Image image={this.state.image}
                height={this.state.clientHeight}
                width={this.state.clientWidth} name="image"/>
        );
    }
}

export default ResizedImage;