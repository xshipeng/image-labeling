import React, { Component } from 'react'
class ButtonSet extends Component {
    constructor(){
        super();
        this.state={
            isUndo: false,
            isSave: false,
        };
    }
    handleUndo=()=>{
        this.setState({
            isUndo: true,
        });
        const {isUndo}=this.state

    }
    handleSubmit=()=>{

    }
    render() {
        return (
            <div>
                <button onClick={this.handleUndo.bind(this)}>
                    Undo</button>
                <button 
                onClick={this.handleSubmit.bind(this)}>Save</button>
            </div>
        );
    }
}

export default ButtonSet;