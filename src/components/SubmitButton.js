import React, { Component } from 'react';
import axios from "axios";

class SubmitButton extends Component {
    constructor() {
        super();
        this.state = {
            imageUrls: null,
            imageIndex: 0,
            imageUrl: null,
            imageId: 0,
        }
    }
    submitResults = () => {
        if (this.props.hasLabels) {
            if (this.state.imageIndex < Object.keys(this.state.imageUrls).length) {
                axios.post("http://127.0.0.1:8000/results/",
                    {
                        'imageId': this.props.imageId,
                        'result': this.props.labels
                    }, { 'Content-Type': 'application/json' })
                    .then(console.log("data sent to server"));
                this.props.setNextImage(this.state.imageId, this.state.imageUrl);
                this.props.deleteLabels();
                this.getNextImage();
            }
            else {
                console.log("congrads,you have finished all the jobs!")
            }

        }
        else {
            console.log("no data");
        }

    }

    getNextImage = () => {
        let imageUrl = this.state.imageUrls[this.state.imageIndex].imageUrl;
        let imageId = this.state.imageUrls[this.state.imageIndex].id;
        this.setState({
            imageId: imageId,
            imageUrl: imageUrl,
            imageIndex: this.state.imageIndex + 1,
        });
        this.props.setNextImage(imageId, imageUrl);
    }

    getImageUrls = () => {
        axios
            .get("http://127.0.0.1:8000/images")
            .then(res => {
                this.setState({
                    imageUrls: res.data,
                });

                this.getNextImage();
            })
    };
    componentDidMount() {
        this.getImageUrls();
    }
    render() {
        return (
            <div className='col center-align valign-center'>
                <button className="waves-effect waves-light btn center-align" onClick={this.submitResults}>
                    Submit
                </button>
            </div>
        );
    }
}

export default SubmitButton;