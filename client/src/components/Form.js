import React, { Component } from 'react'

export default class Form extends Component {

    state = {

    }

    createFormObject = (event) => {
        let target = event.target.name
        this.setState({ [target]: event.target.value })
    }

    render() {
        let { resourceObject, createForm } = this.props

        let form = resourceObject.map(resource => {
            return (
                <div key={resource} >
                    <label htmlFor={resource}>{resource}</label>
                    <input required type='text' name={resource} id={resource} onChange={this.createFormObject}></input>
                </div>
            )
        })

        return (
            <form onSubmit={(evt) => createForm(evt,this.state)}>
                {form}
                <button type='submit' onClick={(evt) => createForm(evt,this.state)}>SUBMIT</button>
            </form>
        )
    }
}