import React, { Component } from 'react';
import { Image } from "react-konva";
class ImageContainer extends Component {
    constructor(){
        super();
        this.state = {
            image: null
        };
    }
    
    componentDidMount() {
        const image = new window.Image();
        image.src = require("../group-photo.jpg");
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };
    }

    render() {
        return (
            <Image image={this.state.image} />
        );
    }
}

export default ImageContainer;