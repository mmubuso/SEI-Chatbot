import React, { Component } from 'react'
import axios from 'axios'

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
        this.setState({count : num})
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
            <div>

                {

                    this.state.toggleEditCreateForm ?

                        <div>
                            <h1>Create A Subject</h1>
                            <label htmlFor='subject'>Subject Name</label>
                            <input ref={ev => this.name = ev} name='name'></input>
                        </div >
                        :
                        <div>
                            <label htmlFor='subject'> Edit A Subject </label>
                            <select
                                required
                                name='subject'
                                id='subject'
                                value={subject}
                                onChange={this.handleChange}>
                                <option value={0}>Select Subject</option>
                                {subjectOptions}
                            </select>
                            <input ref={a => this.newName = a} type='text' placeholder='New Name For Subject' />
                        </div>
                }
                <button
                    onClick={this.toggleForm}> Toggle
                </button>
                <button
                    onClick={
                        this.state.toggleEditCreateForm ?
                            this.createSubject
                            :
                            this.updateSubject
                    }>
                    {
                        this.state.toggleEditCreateForm
                            ?
                            'Create A Subject'
                            :
                            'Edit Subject'
                    }
                </button>
            </div>
        )
    }
}
