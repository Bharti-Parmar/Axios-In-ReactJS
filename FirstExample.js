import React, { Component } from 'react';
import axios from 'axios';


//  fetch and show data using axios, API


class FirstExample extends Component {

    state = {
        persons: [],
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {/* {
                        this.state.persons.map(person => 
                        <li key={person.id}>{person.name}</li>)
                    } */}
                      {
                        this.state.persons.map(person => 
                        <li key={person.id}>
                            <h1>{person.id}</h1>
                            {person.name} <br /> {person.email} <br />
                            Address: {person.address.street} | {person.address.city} | {person.address.zipcode} 
                            | {person.address.geo.lat} </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default FirstExample;