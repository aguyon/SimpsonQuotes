import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleNameChange = (event) => {
        const specialChar = event.target.value.includes('*')
        if (specialChar) {
            return ''
        } else {
            this.setState({ name: event.target.value })
        }
    }

    render() {
        return (
            <form>
                <h1>{this.state.name}</h1>
                <label htmlFor="name">Text : </label>
                <input id="name" value={this.state.name} onChange={this.handleNameChange} type="text" placeholder="Enter a text" />
            </form>
        );
    }
}

export default Form;