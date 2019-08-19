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
        subject: {},
        showSingleMedia: false,
    }

    //toggle showSingle Media on/off
    toggleShowSingleMedia = () => {
        this.setState(state => {
            return { showSingleMedia: !state.showSingleMedia }
        })
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
    getAllInformationForChosenSubject = async (information) => {
        let response = await axios.get(`api/v1/subjects/${this.state.subject._id}/${information}`)
        await this.setState({ information: response.data })
    }

    //delete a topic
    deleteTopic = async (subjectId, category, itemId) => {
        axios.delete(`api/v1/subjects/${subjectId}/${category}/${itemId}`)
            .then(res => this.getAllInformationForChosenSubject(category))
            .catch(err => console.log(err))
    }

    //Filter through information for everything that has a specific input
    //Input
    // topic - string of topic we are looking for
    filterForTopic = (searchKey => {
        let filteredArray = this.state.information
        console.log(filteredArray)
        filteredArray = filteredArray.filter(info => {
            return info.topic.includes(searchKey)
        })
        console.log(filteredArray)
        this.setState({ information: filteredArray })
    })

    componentDidMount() {
        this.getAllSubject()
        // For testing purposes
    }

    render() {
        //destructure state
        let { subjects, information, subject, showSingleMedia } = this.state

        return (
            <Container>
                <h1 className='display-2'>{subject.name}</h1>
                <div className='row align-items-center MainBody' >
                    <Media
                        information={information}
                        subjects={subjects}
                        singleSubject={subject}
                        deleteMethod={this.deleteTopic}
                        showSingleMedia={showSingleMedia}
                        toggleShowSingleMedia={this.toggleShowSingleMedia}
                    />
                    <Meridio
                        filterMethod={this.filterForTopic}
                        information={information}
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
