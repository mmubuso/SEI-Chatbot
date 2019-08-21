import React, { Component } from 'react'
import axios from 'axios';

export default class SubjectForm extends Component {

    state = {
        toggleEditCreateForm: false,
        subject: 0,
        count: 0
    }

    // edit handle
    handleChange = (event) => {
        this.setState({ subject: event.target.value })
    }

    //update Subject
    updateSubject = () => {
        if (this.newName.value === '') {
            return
        }
        axios.put(`/api/v1/subjects/${this.state.subject}`, { name: this.newName.value })
            .then(res => this.newName.value = '')
            .then(() => this.props.subjectMethod())
            .catch(err => console.log(err))
    }

    //create a new subject field
    createSubject = () => {
        if (this.name.value === '') {
            return
        }
        axios.post(`/api/v1/subjects/`, { name: this.name.value })
            .then(res => this.name.value = '')
            .then(() => this.props.subjectMethod())
            .catch(err => console.log(err))
    }

    //Force state to update
    updateState = () => {
        let num = this.state.count + 1
        this.setState({ count: num })
    }

    // toggle form
    toggleForm = () => {
        this.setState(state => {
            return { toggleEditCreateForm: !state.toggleEditCreateForm }
        })
    }

    render() {
        let { subject } = this.state
        let { subjects } = this.props

        let subjectOptions = subjects.map(subject => {
            return (
                <option
                    key={subject._id}
                    value={subject._id}> {subject.name}
                </option>
            )
        })
        return (
            <div className='subjectForm'>

                {

                    this.state.toggleEditCreateForm ?

                        <div className='row my-4'>
                            <label className='col-12'>Create Subject</label>
                            <div className='col-12'>
                                <input
                                    className='form-control'
                                    placeholder='Subject Name'
                                    ref={ev => this.name = ev}
                                    name='name'></input>
                            </div>
                        </div >
                        :
                        <div className='my-4 row'>
                            <label
                                className='col-12'
                                htmlFor='subject'> Edit Subject Name</label>
                            <select
                                className='form-control'
                                required
                                name='subject'
                                id='subject'
                                value={subject}
                                onChange={this.handleChange}>
                                <option value={0}>Select Subject</option>
                                {subjectOptions}
                            </select>
                            <input 
                            className='col-12'
                            ref={a => this.newName = a} 
                            type='text' 
                            placeholder='New Name For Subject' />
                        </div>
                }

                <button
                    className="col-12 btn btn-outline-secondary"
                    onClick={this.toggleForm}> {
                        this.state.toggleEditCreateForm ?
                        'Switch to Update Form'
                        :
                        'Switch to Create Form'
                        }
                    </button>
                <button
                    className='col-12 btn btn-success'
                    onClick={
                        this.state.toggleEditCreateForm ?
                            this.createSubject
                            :
                            this.updateSubject
                    }>
                    Submit
                </button>
            </div>
        )
    }
}
