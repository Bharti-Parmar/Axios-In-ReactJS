import React, { Component } from 'react';
import axios from 'axios';
import API from '../../MyJsonData/api.js';

// axios using await, async and promise

class AwaitExample extends Component {

    handleChange = e => {
        this.setState({
            id: e.target.value
        })
    }

    //  the method is async which will allow us to await certain actions inside.
    handleSubmit = async e => {
        e.preventDefault();
      
        // await keyword resolve promises
        const res = await API.delete(`users/${this.state.id}`);
      
        console.log(res);
        console.log(res.data);
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Person Id:</label>
                    <input type="number" name="id" onChange={this.handleChange} />
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}

export default AwaitExample;