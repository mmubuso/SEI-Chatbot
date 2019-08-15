import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import './Meridio.css'
import axios from 'axios'

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



    componentDidMount() {
        //Use to test api call
        // this.callWitApi('What will you open the store')
        //Ask user to select subject
    }
    render() {

        //destructure state
        let { userInput, entities } = this.state

        //destructure props
        let { filterMethod, allInformation, subjects, singleObjectInfo } = this.props

        let subjectButtons = subjects.map(subject => {
            return (
                <button onClick={() => singleObjectInfo(subject._id)}>
                    {subject.name}
                </button>
            )
        })


        return (
            <div className='col-lg-5 col-sm-12 Meridio'>
                <Jumbotron>
                    {subjectButtons}
                    <input type='text' value={userInput} onChange={this.handleUserInput} />
                </Jumbotron>
            </div>
        )
    }
}
