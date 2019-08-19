import React, { Component } from 'react';
import './Information.css';
import { Link } from 'react-router-dom'

export default class Information extends Component {

    render() {

        //destructure props
        let { info1, info2, info3, info4, infoTitle, subjectId, itemId, category, images } = this.props


        return (
            <div className='Information'>

                <h1 className='lead'>{infoTitle}</h1>
                {
                    images
                        ?
                        <div className='info-Images'>
                            <img src={images} alt='equation' />
                        </div>
                        :
                        null
                }
                <li>{info1}</li>
                <li>{info2}</li>
                <li>{info3 ? info3 : 'N/A'}</li>
                <li>{info4 ? info4 : 'N/A'} </li>
                <Link to={`/resource/${itemId}/${category}/${subjectId}`}>Edit Info</Link>
                <button
                    onClick={() => this.props.deleteMethod(subjectId, category, itemId)}>Delete</button>
                <hr className="my-4"></hr>

            </div>
        )
    }
}