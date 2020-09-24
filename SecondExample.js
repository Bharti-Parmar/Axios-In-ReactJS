import React, { Component } from 'react';
import axios from 'axios';


// axios for delete the data using its key from API

class SecondExample extends Component {

    state = {
        id: 0,
    }

    handleChange = e => {
        this.setState({
            id: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const user = {
            id: this.state.id
        };

        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }

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

export default SecondExample;