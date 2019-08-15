import React, { Component } from 'react';
import axios from 'axios';
import Meridio from './Meridio';
import Media from './Media';
import { Container } from 'reactstrap';
import './MainBody.css';

export default class MainBody extends Component {

    // Create
    state = {
        subjects: [],
        isMeridioActive: false,
        information: [],
        subject: null
    }

    // updates state with all subjects in database
    getAllSubject = async () => {
        let response = await axios.get('api/v1/subjects')
        this.setState({ subjects: response.data })
    }
    //This method gets all information about one specific id
    //Input 
    //  subjectId - string of mongoId for subject
    //  information -  string that should only either be 'resources' or 'questions'
    getAllInformationForChosenSubject = async (subjectId, information) => {
        let response = await axios.get(`api/v1/subjects/${subjectId}/${information}`)
        this.setState({ information: response.data })
    }



    componentDidMount() {
        this.getAllSubject()
    }

    render() {
        //destructure state
        let { subjects } = this.state

        return (
            <Container>
                <div className='row align-items-center MainBody' >
                    <Media />
                    <Meridio subjects={subjects} />
                </div>
            </Container>
        )
    }
}
