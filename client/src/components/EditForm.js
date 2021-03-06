import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './EditForm.css'

export default class EditForm extends Component {

    state = {
        redirect: false,
        object: {}
    }


    componentDidMount() {
        this.updateStateWithItemInfo()
    }

    //get Information on item
    updateStateWithItemInfo = () => {
        axios.get(`/api/v1/subjects/${this.props.match.params.subjectId}/${this.props.match.params.category}/${this.props.match.params.resourceId}`)
            .then(res => {
                this.setState({ object: res.data })
            })
            .catch(err => console.log(err))
    }

    //handle change
    handleChange = (event) => {
        let newObject = this.state.object
        newObject[event.target.name] = event.target.value
        this.setState({ object: newObject })
    }

    //Perform ajax edit request
    updateItem = () => {
        axios.put(`/api/v1/subjects/${this.props.match.params.subjectId}/${this.props.match.params.category}/${this.props.match.params.resourceId}`,
            this.state.object)
            .then(res =>
                this.setState({ redirect: true })
            )
            .catch(err => console.log(err))
    }

    render() {

        //loop through state and create an input field for each item
        let newItems = Object.keys(this.state.object).map(key => {
            if (key !== '_id' && key !== 'subjectId' && key !== '__v') {
                return (
                    <div key={key}>
                        <label htmlFor={key}>{key}</label>
                        <input
                            className='form-control'
                            name={key}
                            onChange={this.handleChange}
                            id={key}
                            type='text'
                            value={this.state.object[key]} />
                    </div>
                )
            }

        })

        return (
            <div className='editForm'>
                {
                    this.state.redirect
                        ?
                        <Redirect to='/' />
                        :
                        <div className='container'>
                            <h1>Edit Item</h1>
                            {newItems}
                            <button
                                className='btn btn-success mr-4 my-4'
                                onClick={this.updateItem}>Submit</button>
                            <button
                                className='btn btn-danger'
                                onClick={() => this.setState({ redirect: true })}>Cancel</button>
                        </div>
                }
            </div>
        )
    }
}
