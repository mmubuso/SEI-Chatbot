import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

export default class InformationForm extends Component {

    state = {
        subject: {},
        infoObject: {},
        intent: 'questions',
    }

    handleFormChange = (event) => {
        let stateTargetName = event.target.name
        this.setState({ [stateTargetName]: event.target.value })
    }
 
    //Create new information
    createNewInfo = async (event,object) => {
        event.preventDefault()
        object.topic = this.topic.value
        await this.setState({infoObject: object})
        await axios.post(`/api/v1/subjects/${this.state.subject}/${this.state.intent}`,this.state.infoObject)
    }

    render() {
        console.log(this.props.subjects)
        //destructure state and props
        let { subject, intent } = this.state
        let { subjects } = this.props

        //Create selector for object
        let subjectLists = subjects.map(subject => {
            return (
                <option
                    key={subject._id}
                    value={subject._id}>{subject.name}
                </option>
            )
        })

        let questionObject = ['questions','optionA','optionB','optionC','optionD']
        let resourcesObject = ['resourceA','resourceB','resourceC','resourceD']
       


        return (
            <div>
                <form>
                    <label htmlFor='subject'>Select Subject </label>
                    <select required name='subject' id='subject' onChange={this.handleFormChange} value={subject}>
                        {subjectLists}
                    </select>
                    <label htmlFor='intent'>Is this a question or a resource</label>
                    <select required name='intent' id='intent' onChange={this.handleFormChange} value={intent}>
                        <option value='questions'>Questions</option>
                        <option value='resources'>Resources</option>
                    </select>
                    <hr className='my-4'/>
                    <label htmlFor='topic'>Topic</label>
                    <input required id='topic' type='text' ref={a => this.topic = a}/>
                        <Form 
                            resourceObject={intent === 'questions' ? questionObject : resourcesObject}
                            createForm={this.createNewInfo}
                        />
                </form>
            </div>
        )
    }
}
