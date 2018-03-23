import React, { Component } from 'react';
import axios from "axios";

class SubmitButton extends Component {
    submitResults = () => {
        
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