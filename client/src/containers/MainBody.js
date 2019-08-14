import React, { Component } from 'react';
import axios from 'axios';
import Meridio from './Meridio';
import Media from './Media';
import { Container } from 'reactstrap';
import './MainBody.css';

export default class MainBody extends Component {

    // Create
    state = {
        content: [],
        isMeridioActive: false,
        subject: null
    }

    getContent = async (str) => {
        let response = await axios.get(`/api/v1/questions`)
        await this.setState({ content: response.data })
    }

    componentDidMount() {
        this.getContent()
    }

    render() {
        //destructure state
        let { content } = this.state

        return (
            <Container>
                <div className='row align-items-center MainBody' >
                    <Media content={content} />
                    <Meridio />
                </div>
            </Container>
        )
    }
}
