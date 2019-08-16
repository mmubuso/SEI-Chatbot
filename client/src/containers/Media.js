import React, { Component } from 'react'
import './Media.css'
import { Jumbotron } from 'reactstrap';
import Information from '../components/Information';


// Media is the compoenent that will hold all the questions and information
export default class Media extends Component {
    state = {
        showSingleMedia: false,
        singleMedia: {}
    }



    render() {

        //Destructure props and state
        let { information } = this.props;
        let { } = this.state;

        //Create list of items
        let informationList = information.map(info => {
            return (
                <Information
    
                    key={info._id}
                    infoTitle={info.questions ? info.questions : info.topic}
                    info1={info.optionA ? info.optionA : info.resourceA}
                    info2={info.optionB ? info.optionB : info.resourceB}
                    info3={info.optionC ? info.optionC : info.resourceC}
                    info4={info.optionD ? info.optionD : info.resourceD}

                />
            )
        })



        return (
            <div className='col-md-7 col-sm-12 Media'>
                <Jumbotron>
                    <div className='MediaContainer'>
                        {informationList}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
