import React, { Component } from 'react'
import './Subject.css'
import SubjectForm from './SubjectForm';

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

    render() {
        //destructure props
        let { subjects ,subjectMethod} = this.props

        //create jsx elements for subjects
        let subjectList = subjects.map(subject => {
            return (
                <button
                    key={subject._id}
                    className='subject col-sm-12'
                    onClick={() => this.runTwoMethods(subject._id)}>
                    {subject.name}
                </button>
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
                    onClick={this.toggleForm}>Change Subjects
                </button>
            </div>
        )
    }
}
