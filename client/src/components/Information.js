import React, { Component } from 'react';
import './Information.css';

export default class Information extends Component {
    render() {

        //destructure props
        let { info1, info2, info3, info4, infoTitle} = this.props
        return (
            <div className='Information'>
                <h1 className='lead'>{infoTitle}</h1>
                <li>{info1}</li>
                <li>{info2}</li>
                <li>{info3 ? info3 : 'N/A'}</li>
                <li>{info4 ? info4 : 'N/A'} </li>
                <hr class="my-4"></hr>
            </div>
        )
    }
}
