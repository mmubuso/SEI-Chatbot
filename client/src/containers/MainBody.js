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
        information: [],
        subject: {}
    }

    // updates state with all subjects in database
    getAllSubject = async () => {
        let response = await axios.get('api/v1/subjects')
        this.setState({ subjects: response.data })
    }

    //Update state with a single object
    getSingleSubject = async (subjectId) => {
        let response = await axios.get(`api/v1/subjects/${subjectId}`)
        this.setState({ subject: response.data })
    }

    //Gets all information about one specific id
    //Input 
    //  subjectId - string of mongoId for subject
    //  information -  string that should only either be 'resources' or 'questions'
    getAllInformationForChosenSubject = async (subjectId, information) => {
        let response = await axios.get(`api/v1/subjects/${subjectId}/${information}`)
        await this.setState({ information: response.data })
    }

    //Filter through information for everything that has a specific input
    //Input
    // topic - string of topic we are looking for
    filterForTopic = (topic) => {
        let filteredArray = this.state.information
        if (topic) {
            filteredArray.filter(info => {
                return info.questions === topic
            })
        }
        this.setState({ information: filteredArray })
    }

    componentDidMount() {
        this.getAllSubject()
        // For testing purposes
        this.getAllInformationForChosenSubject("5d54a165ec4bf85d8628c4e6", "resources")
    }

    render() {
        //destructure state
        let { subjects, information, subject} = this.state

        return (
            <Container>
                <div className='row align-items-center MainBody' >
                    <Media 
                        information={information}
                        subjects={subjects}
                        singleSubject={subject}
                    />
                    <Meridio
                        filterMethod={this.filterForTopic}
                        allInformation={this.getAllInformationForChosenSubject}
                        subjects={subjects}
                        subjectMethod={this.getAllSubject}
                        singleObjectInfo={this.getSingleSubject}
                    />
                </div>
            </Container>
        )
    }
}
