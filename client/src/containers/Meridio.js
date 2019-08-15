import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import './Meridio.css'
import axios from'axios'

export default class Meridio extends Component {

    state = {
        entities: {
            intent: {},
            
        },
        userInput: '',
        meridioFlag: false,
    }

    //Send userinput to wit api
    //Input
    // userInput - String of users question
    callWitApi = async (userInput) => {
        userInput = userInput.replace(/[ ]/g,'%20')
        let response = await axios({
            method: 'GET',
            url:`https://api.wit.ai/message?v=20190815&q=${userInput}`,
            headers: {
                Authorization : `Bearer `,
            }
        })
        this.setState({entities: response.data.entities})
    }

    // Validate to make sure input has intent

    toggleMeridio = () => {
        this.setState((state) => {
            return {meridioFlag : !state.meridioFlag}
        })
    }

    //Captures user input
    //Input
    // event - event object from user input
    handleUserInput = (event) => {
        let newInput = this.state.userInput
        newInput = event.target.value
        this.setState({userInput : newInput})
    }


    componentDidMount(){
        //Use to test api call
        // this.callWitApi('What will you open the store')
    }
    render() {

        //destructure state
        let { userInput } = this.state


        return (
            <div className='col-lg-5 col-sm-12 Meridio'>
                <Jumbotron>

                    <input type='text' value={userInput} onChange={this.handleUserInput}/>
                </Jumbotron>
            </div>
        )
    }
}
