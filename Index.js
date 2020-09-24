import React, { Component } from 'react';
import FourthExample from './FourthExample';
import MyApi from '../../MyJsonData/MyApi.js';

class Index extends Component {

    constructor(props){
        super(props)
        this.state ={
            isLoading: true,
            name: null,
            avatar: null,
            email: null
        }
    }

    async componentDidMount() {
    // Load async data.
       
        // try{
            let userData = await MyApi.get('/',{
                // params for  how many results and which details we expect.
                params: {
                    result: 1,
                    inc: 'name, email'
                }
            });
        // }
        // catch(e){
        //     console.log('Axios request failed: ${e}');
        // }
       

    // parse the data for ease of use
        // store the data inside the userData variable.  
        // userData = userData.data.result[0];

    // Update state with new data.
        // we update the variable with the returned data for ease of use.
        const name = userData.name; 
        // const name = `${userData.name.first} ${userData.name.last}`;
        const email = userData.email;

    // Re-render our component.

        this.setState = ({
            ...this.state, ...{
            isLoading: false,
            name,
            email,
            }
        });

    }

    render() {

        const { isLoading, name, email } = this.state;

        return (
            <div>
                {/* <FourthExample name="Jessica Doe" avatar="..." email="hello@jessica.com" /> */}
                <FourthExample isLoading={isLoading} name={name} email={email} />
            </div>
        );
    }

}

export default Index;