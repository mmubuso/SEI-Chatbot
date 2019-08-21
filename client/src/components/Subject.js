import React, { Component } from 'react'
import './Subject.css'
import SubjectForm from './SubjectForm';
import axios from 'axios';

export default class Subject extends Component {

    state = {
        toggleForm: false
    }

    runTwoMethods = async (id) => {
        await this.props.singleSubjectMethod(id)
        this.props.toggle()
    }

    //toggle form
    toggleForm = () => {
        this.setState(state => {
            return { toggleForm: !state.toggleForm }
        })
    }

    //delete item
    deleteSubject = (id) => {
        axios.delete(`/api/v1/subjects/${id}`)
            .then(() => this.props.subjectMethod())
            .catch((err) => console.log(err))
    }

    render() {
        //destructure props
        let { subjects, subjectMethod } = this.props

        //create jsx elements for subjects
        let subjectList = subjects.map(subject => {
            return (
                <div
                    key={subject._id}
                    className='subjectNames col-12'>
                    <div
                        className='subject'
                        onClick={() => this.runTwoMethods(subject._id)}>
                        {subject.name}
                    </div>
                    <span onClick={() => this.deleteSubject((subject._id))}> {String.fromCodePoint(0x274C)}</span>
                    <hr className='my-2'/>
                </div>
            )
        })

        return (
            <div className='Subjects mb-4'>
                <h1>Choose a topic to learn about</h1>
                {
                    this.state.toggleForm
                        ?
                        <SubjectForm
                            toggleForm={this.toggleForm}
                            toggleMeridio={this.props.toggle}
                            subjects={subjects}
                            subjectMethod={subjectMethod}
                        />
                        :
                        subjectList
                }
                <button
                    className='button btn btn-outline-secondary'
                    onClick={this.toggleForm}>Change Subjects
                </button>
            </div>
        )
    }
}
