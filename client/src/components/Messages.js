import React, { Component } from 'react'
import './Messages.css'
import Fade from 'react-reveal/Fade'

export default class Messages extends Component {


    componentDidUpdate(){
        this.messages.scrollTop = 99000;
    }

    render() {
        let { messages } = this.props

        let messageList = messages.map((message, index) => {
            return (
                <div
                    key={index}
                    className="message">
                    <Fade>
                        <p>{message}</p>
                        <hr className='my-4' />
                    </Fade>
                </div>
            )
        })
        return (
            <div
                ref={a => this.messages = a}
                className='Messages col-md-12 mb-4'>
                {messageList}
            </div>
        )
    }
}
