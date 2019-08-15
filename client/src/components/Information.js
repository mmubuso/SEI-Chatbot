import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div>
                <h1 className='lead'>{this.props.infoTitle}</h1>
                <p>{this.props.info1}</p>
                <p>{this.props.info2}</p>
                <p>{this.props.info3}</p>
                <p>{this.props.info4}</p>
            </div>
        )
    }
}
