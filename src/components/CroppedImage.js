import React, { Component } from 'react';
import { Image, Circle, Group } from "react-konva";
class CroppedImage extends Component {
    constructor() {
        super();
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = this.props.imageUrl;
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
            <Group>
                <Image
                    ref="croppedimage"
                    crop={{ x: this.props.x - 5, y: this.props.y - 5, width: 10, height: 10 }}
                    x={this.props.x}
                    y={this.props.y}
                    width="50"
                    height="50"
                    image={this.state.image} />
                <Circle
                    x={this.props.x + 25}
                    y={this.props.y + 25}
                    fill="red"
                    radius="2.5" />
            </Group>
        );
    }
}

export default CroppedImage;