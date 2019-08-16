import React, { Component } from 'react'
import './Subject.css'

export default class Subject extends Component {

    runTwoMethods = async (id) => {
        await this.props.subjectMethod(id)
        this.props.toggle()
    }

    render() {
        //destructure props
        let { subjects } = this.props

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
                <h1 className='display-3'>Choose a topic to learn about</h1>
                {subjectList}
            </div>
        )
    }
}
