import React, { Component } from 'react';
import axios from 'axios';


// fetching data from axios and create, update, delete id performed

const api = axios.create({
    baseURL:  `https://jsonplaceholder.typicode.com/users`,
    // header: {
    //     'X-auth-key': 'axios data 123'
    // }
})

class FifExample extends Component {

    state = {
        persons: [],
    }

    constructor(){
        super();
        let data = api.get('/').then(res => {
            console.log(res.data);
            this.setState({
                persons: res.data
            })
        })
        
    }
    
    createPersons = async () => {
        let res = await api.post('/',
        {
            id: 11,
            name: 'Bharti',
            username: "Parmar",
            email: "bharti@gmail.com",
            address: {
                street: "Kulas",
                suite: "556",
                city: "Gwenborough",
                zipcode: "00000"
            }
        })
        .catch(e => console.log(e))
        console.log(res);
    }

    deletePersons = async (id) => {
        let data = await api.delete(`/${id}`)
        // this.getPersons();
    }

    updatePersons = async (id, val) => {
        let data = await api.patch(`/${id}`, 
        {
            name: val
        })
        // this.getPersons();
    }

    render() {
        return (
            <div>
                <button onClick={this.createPersons} className="btn btn-primary my-2">Create Persons</button>
                {
                    this.state.persons.map(person => 
                    <h4 key={person.id} onClick={() => this.updatePersons(person.id, `${person.name}a`)}>
                        {person.id} - {person.name}
                        <button onClick={this.deletePersons(person.id)} className="btn btn-danger ml-2">X</button>
                    </h4>
                    )
                }
                
            </div>
        );
    }
}

export default FifExample;