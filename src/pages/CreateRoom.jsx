import React from 'react';
import Sidebar from '../components/Sidebar';
import { Row, Col, Card } from 'reactstrap';
import ButtonGoBack from '../components/ButtonGoBack';
import Questions from '../components/Questions';
import Room from '../components/Room';
import Lobby from '../components/Lobby';

function CreateRoom() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Row
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: ' 0.5vh 20vh 10vh 40vh',
                    }}>
                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        {/*<Questions />*/}

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
