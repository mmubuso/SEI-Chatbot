import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import './Meridio.css'
import axios from 'axios'
import Messages from '../components/Messages';
import Subject from '../components/Subject';

export default class Meridio extends Component {

    state = {
        entities: {},
        userInput: '',
        meridioFlag: false,
        messages: [],
        messageFlag: false
    }

    //Run interaction between user and meridio
    main = async () => {
        console.log(this.valdateWitApiIntent() + ' ' + this.valdateWitApiTopic())
        if (this.valdateWitApiIntent() && this.valdateWitApiTopic()) {
            //captured from valid intent and valid topic
            //we get all the valid information with the users intent
            await this.props.allInformation('questions')
            //we filter through the valdi information with the users topic
            await this.props.filterMethod('kJDlkas')
            //check if we have any information the topic the user asked for
            this.checkIfArrayIsEmpty() ?
                this.pushUserInputToMessages(`Meridio: Hmmm looks like I dont have anything on TOPIC, 
            if you find that information remember to come back here and create that information`)
                :
                this.pushUserInputToMessages('Meridio: Generating requested information')
        } else if (this.valdateWitApiIntent() && !this.valdateWitApiTopic()) {
            //We use this method to present all information if we don't have a valid topic
            this.props.allInformation('5d54a2b77f997d5daa9463ce', 'questions')
            this.pushUserInputToMessages(`Meridio: I wasn't able to detect a topic, so here is everything on the subject?`)
            this.meridioFlag()
        } else if (!this.valdateWitApiIntent() && this.valdateWitApiTopic()) {
            this.pushUserInputToMessages(`Meridio: So I detected the topic but I couldnt detect whether you wanted to learn or test yourself on this topic
            . Try asking the same question in another way`)
        } else if (!this.valdateWitApiIntent() && !this.valdateWitApiTopic()) {
            this.pushUserInputToMessages(`Meridio: I'm only good at helping you find information to learn or test yourself on. Try asking me about a topic 
            you want to learn on thats in the subject you selected.`)
        }
    }

    //Check if arry containing information is empty
    checkIfArrayIsEmpty = () => {
        return this.props.information.length === 0 ? true : false
    }

    //Send userinput to wit api
    //Input
    // userInput - String of users question
    callWitApi = async () => {
        let userInput = this.state.userInput.replace(/[ ]/g, '%20')
        let response = await axios({
            method: 'GET',
            url: `https://api.wit.ai/message?v=20190815&q=${userInput}`,
            headers: {
                Authorization: `Bearer 4E6O2KLWJIQ4G7M3YG564NJR4BO7CSBY`,
            }
        })
        this.setState({ entities: response.data.entities })
    }

    // Validate to make sure entities has intent
    valdateWitApiIntent = () => {
        return this.state.entities.intent ? true : false
    }

    // Validate to make sure entities has topic
    valdateWitApiTopic = () => {
        // return this.state.entities.topic ? true : false
        return true
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
    handleOnSubmit = async (event) => {
        event.preventDefault()
        await this.callWitApi()
        this.pushUserInputToMessages(`Human: ${this.state.userInput}`)
        this.main()
    }

    //Push user message to list of messages
    pushUserInputToMessages = (input) => {
        let newMessage = [...this.state.messages]
        newMessage.push(input)
        this.setState(
            {
                messages: newMessage,
                userInput: ''
            })
    }

    //Toggle show message of or on
    togggleMessageScreen = () => {
        this.setState((state) => {
            return { messageFlag: !state.messageFlag }
        })
    }
    componentDidMount() {
        this.pushUserInputToMessages(`Meridio: Hello welcome to the SEI learning platform, 
        My name is Meridio. I'm really good at helping you find information on Javascript 
        data typs and control flow. 
        Try asking me, "I want to learn about primitive data types"`)
    }
    render() {

        //destructure state
        let { userInput, messageFlag, messages } = this.state

        //destructure props
        let { subjectMethod, subjects, singleObjectInfo } = this.props

        return (
            <div className='col-md-5 col-sm-12 Meridio'>
                <Jumbotron>
                    {
                        messageFlag ?
                            <Messages
                                messages={messages}
                                toggle={this.togggleMessageScreen}
                            />
                            :
                            <Subject
                                toggle={this.togggleMessageScreen}
                                subjects={subjects}
                                singleSubjectMethod={singleObjectInfo}
                                subjectMethod={subjectMethod}
                            />
                    }

                    <form onSubmit={(evt) => this.handleOnSubmit(evt)}>
                        <input type='text' value={userInput} onChange={this.handleUserInput} />
                        <input type='submit' onSubmit={(evt) => this.handleOnSubmit(evt)} />
                    </form>
                </Jumbotron>
            </div>
        )
    }
}