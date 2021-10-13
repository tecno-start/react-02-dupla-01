import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Row, Col, Card, Container} from 'reactstrap';
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
                <Container>
                <Row>
                    <Col xs="6" sm="4">

                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <Questions />

                        </Card>

                    </Col>

                    <Col xs="6" sm="4">

                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <Room />

                        </Card>

                    </Col>

                   <Col xs="6" sm="4">

                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        {/*} <Lobby />*/}

                    </Card>

                    </Col>

                </Row>
                </Container>
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
