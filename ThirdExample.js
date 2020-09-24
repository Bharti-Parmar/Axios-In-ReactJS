import React, { Component } from 'react';
import axios from 'axios';


// axios example for adding name value in API

class ThirdExample extends Component {
    state = {
        name: '',
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const user = {
            name: this.state.name
        };

        axios
        .post(`https://jsonplaceholder.typicode.com/users`, 
        {
            user
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
                <div className="card">
                    <h4>{this.state.name}</h4>
                </div>
            </div>
        );
    }
}

export default ThirdExample;