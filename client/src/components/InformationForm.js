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

    componentDidMount() {
        this.setState({ subject: this.props.subjects[0]._id })
    }
    //Create new information
    createNewInfo = async (event, object) => {
        event.preventDefault()
        object.topic = this.topic.value
        await this.setState({ infoObject: object })
        await axios.post(`/api/v1/subjects/${this.state.subject}/${this.state.intent}`, this.state.infoObject)
        this.props.toggleShowSingleMedia()
    }

    render() {
        //destructure state and props
        let { intent } = this.state
        let { subjects } = this.props

        //Create selector for object
        let subjectLists = subjects.map(subject => {
            return (
                <option
                    className='form-control'
                    key={subject._id}
                    value={subject._id}>{subject.name}
                </option>
            )
        })

        let questionObject = ['questions', 'images', 'optionA', 'optionB', 'optionC', 'answer']
        let resourcesObject = ['resourceA', 'images', 'resourceB', 'resourceC', 'resourceD',]



        return (
            <div className='informationForm'>
                <form className='container'>
                    <h2>Create Information</h2>
                    <label
                        className='lead'
                        htmlFor='subject'>Select Subject </label>
                    <select
                        className='form-control'
                        required={true}
                        name='subject'
                        id='subject'
                        onChange={this.handleFormChange} >
                        {subjectLists}
                    </select>
                    <label
                        className='lead'
                        htmlFor='intent'>Select Category</label>
                    <select
                        className='form-control'
                        required={true}
                        name='intent'
                        id='intent'
                        onChange={this.handleFormChange}
                        value={intent}>
                        <option
                            className='form-control'
                            value='questions'>Questions</option>
                        <option
                            className='form-control'
                            value='resources'>Resources</option>
                    </select>
                    <input
                        className='form-control my-1 col-12'
                        required={true}
                        placeholder='Enter Topic'
                        id='topic'
                        type='text'
                        ref={a => this.topic = a} />
                    <Form
                        resourceObject={intent === 'questions' ? questionObject : resourcesObject}
                        createForm={this.createNewInfo}
                    />
                </form>
            </div>
        )
    }
}
