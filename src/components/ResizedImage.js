import React, { Component } from 'react';

class ResizedImage extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: null,
            actualImageWidth: 0,
            actualImageHeight: 0,
        }
    }
    componentDidMount() {
        const image = new window.Image();
        image.src = require("../people-02.jpg");
        image.onload = () => {
            console.log(image.width, image.height);
            this.setState({
                imageUrl: image.src,
                actualImageWidth: image.width,
                actualImageHeight: image.height,
            });
        }
    }
    componentDidUpdate() {
        window.addEventListener('resize', this.changeSize);
        this.changeSize();
    }
    changeSize = () => {
        const image = document.getElementById("image");
        this.props.setImageProps(this.state.imageUrl, 
            image.clientHeight, image.clientWidth,
        this.state.actualImageHeight,this.state.actualImageWidth);
    }
    render() {
        return (
            <img src={this.state.imageUrl} id="image" className="responsive-img" />
        );
    }
}

export default ResizedImage;