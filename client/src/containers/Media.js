import React, { Component } from 'react'
import './Media.css'
import { Jumbotron } from 'reactstrap';


// Media is the compoenent that will hold all the questions and information
export default class Media extends Component {
    state = {
        showSingleMedia: false,
        singleMedia: {}
    }



    render() {
        
        //Checks if mainbody context is empty
        // this.props.context.map()

        //Destructure media
        return (
            <div className='col-md-7 col-sm-12 Media'>
                <Jumbotron>
                    <div className='MediaContainer'>
                        <h1>{}</h1>

                    </div>
                </Jumbotron>
            </div>
        )
    }
}
