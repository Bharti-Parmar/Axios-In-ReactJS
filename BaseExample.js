import React, { Component } from 'react';
import axios from 'axios';
import API from '../../MyJsonData/api.js';


// delete data using base URL from api.js file 

class BaseExample extends Component {
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
    
        API.delete(`users/${this.state.id}`)
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

export default BaseExample;