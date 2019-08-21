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

        let formList = resourceObject.map(resource => {
            return (
                <div 
                className='my-1 col-12'
                key={resource} >
                    <input
                        className='form-control'
                        placeholder={resource}
                        required={true}
                        type='text'
                        name={resource}
                        id={resource}
                        onChange={this.createFormObject} />
                </div>
            )
        })

        return (
            <div onSubmit={(evt) => createForm(evt, this.state)}>
                
                {formList}
                <button type='submit' onClick={(evt) => createForm(evt, this.state)}>SUBMIT</button>
            </div>
        )
    }
}
