import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import './Meridio.css'
import axios from 'axios'
import Messages from '../components/Messages';

export default class Meridio extends Component {

    state = {
        entities: {},
        userInput: '',
        meridioFlag: false,
        messages: []
    }

    //Send userinput to wit api
    //Input
    // userInput - String of users question
    callWitApi = async (userInput) => {
        userInput = userInput.replace(/[ ]/g, '%20')
        let response = await axios({
            method: 'GET',
            url: `https://api.wit.ai/message?v=20190815&q=${userInput}`,
            headers: {
                Authorization: `Bearer `,
            }
        })
        this.setState({ entities: response.data.entities })
    }

    // Validate to make sure entities has intent
    valdateWitIntent = () => {
        return this.state.entities.intent ? true : false
    }

    // Validate to make sure entities has topic
    valdateWitTopic = () => {
        return this.state.entities.topic ? true : false
    }


    // Turn on/off calls to wit api
    toggleMeridio = () => {
        this.setState((state) => {
            return { meridioFlag: !state.meridioFlag }
        })
    }

    //Captures user input
    //Input
    // event - event object from user input
    handleUserInput = (event) => {
        let newInput = this.state.userInput
        newInput = event.target.value
        this.setState({ userInput: newInput })
    }

    //When user submits a phrase
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.pushUserInputToMessages()
    }

    //Push user message to list of messages
    pushUserInputToMessages = () => {
        let input = this.state.userInput
        let newMessage = [...this.state.messages]
        newMessage.push(input)
        this.setState(
            { 
                messages: newMessage,
                userInput: ''
        })
    }

    componentDidMount() {
        //Use to test api call
        // this.callWitApi('What will you open the store')
        //Ask user to select subject
    }
    render() {

        //destructure state
        let { userInput, entities, messages } = this.state

        //destructure props
        let { filterMethod, allInformation, subjects, singleObjectInfo } = this.props

        return (
            <div className='col-md-5 col-sm-12 Meridio'>
                <Jumbotron>
                    <Messages
                        messages={messages}
                    />
                    <
                    <form onSubmit={(evt) => this.handleOnSubmit(evt)}>
                        <input type='text' value={userInput} onChange={this.handleUserInput} />
                        <input type='submit' onSubmit={(evt) => this.handleOnSubmit(evt)}/>
                    </form>
                </Jumbotron>
            </div>
        )
    }
}
