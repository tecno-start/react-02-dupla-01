import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Row, Col, Card } from 'reactstrap';
import ButtonGoBack from '../components/ButtonGoBack';
import Questions from '../components/Questions';
import Room from '../components/Room';
import Lobby from '../components/Lobby';
import { axiosConfigAuthorized } from '../services/axiosConfig';


function CreateRoom() {
    const [perguntas, setPerguntas] = useState([])


    async function fetchQuestions() {
        return axiosConfigAuthorized.get('/question').then(res => res.data).catch(err => console.error(err))
    }
    fetchQuestions()
        .then(res => setPerguntas(res))

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Row>
                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        <Questions perguntas={perguntas} />

                    </Card>
                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        <Room /> 

                    </Card>
                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        {/*} <Lobby />*/}

                    </Card>
                    <Col md={5} lg={4}>

                    </Col>

                </Row>
                <div style={{
                    textAlign: 'center',
                }}>
                    <ButtonGoBack />
                </div>

            </div >

        </div>
    )
}

export default CreateRoom
