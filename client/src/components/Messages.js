import React, { Component } from 'react'
import './Messages.css'

export default class Messages extends Component {
    render() {
        let { messages } = this.props

        let messageList = messages.map((message,index) => {
            return (
                <div
                    key={index}
                    className="message">
                    <p>{message}</p>
                </div>
            )
        })
        return (
            <div className='Messages col-md-12 mb-4'>
                {messageList}
            </div>
        )
    }
}
