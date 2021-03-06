import React, { Component } from 'react'
import './Media.css'
import { Jumbotron } from 'reactstrap';
import Information from '../components/Information';
import InformationForm from '../components/InformationForm';
import Return from '../lib/images/back.svg';
import Create from '../lib/images/plus.svg';



// Media is the compoenent that will hold all the questions and information
export default class Media extends Component {
    state = {
        singleMedia: {},
    }

    render() {

        //Destructure props and state
        let { toggleShowSingleMedia, information, subjects, deleteMethod, singleSubject, showSingleMedia } = this.props;


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
                    images={info.images}
                    info1={info.optionA ? info.optionA : info.resourceA}
                    info2={info.optionB ? info.optionB : info.resourceB}
                    info3={info.optionC ? info.optionC : info.resourceC}
                    info4={info.answer ? info.answer : info.resourceD}
                    subjects={subjects}
                />
            )
        })



        return (
            <div className='col-md-7 col-sm-12 Media'>
                <Jumbotron>
                    <div className='MediaContainer'>
                        {
                            showSingleMedia
                                ?
                                <InformationForm
                                    subjects={subjects}
                                    singleSubject={singleSubject}
                                    toggleShowSingleMedia={toggleShowSingleMedia} />
                                :
                                informationList
                        }
                    </div>
                    <div className='buttonContainer'>
                        <img
                            className='mediaButton'
                            onClick={toggleShowSingleMedia}
                            src={showSingleMedia ? Return : Create} />
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
