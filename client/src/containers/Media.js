import React, { Component } from 'react'
import './Media.css'
import { Jumbotron } from 'reactstrap';
import Information from '../components/Information';
import InformationForm from '../components/InformationForm';


// Media is the compoenent that will hold all the questions and information
export default class Media extends Component {
    state = {
        showSingleMedia: false,
        singleMedia: {},
    }

    render() {

        //Destructure props and state
        let { information, subjects, deleteMethod } = this.props;


        //Create list of items
        let informationList = information.map(info => {
            return (
                <Information
                    deleteMethod={deleteMethod}
                    key={info._id}
                    itemId={info._id}
                    subjectId={info.subjectId}
                    infoTitle={info.questions ? info.questions : info.topic}
                    category={info.questions ? 'questions' : 'resources'}
                    info1={info.optionA ? info.optionA : info.resourceA}
                    info2={info.optionB ? info.optionB : info.resourceB}
                    info3={info.optionC ? info.optionC : info.resourceC}
                    info4={info.optionD ? info.optionD : info.resourceD}
                    subjects={subjects}
                />
            )
        })



        return (
            <div className='col-md-7 col-sm-12 Media'>
                <Jumbotron>
                    <div className='MediaContainer'>
                        {informationList}
                        {/* <InformationForm
                            subjects={subjects}
                            singleSubject={singleSubject}
                        /> */}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
