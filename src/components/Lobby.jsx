import React from 'react'
import { Row, Col, Card, Container, Alert } from 'reactstrap';

function Lobby() {
    return (
        <div>
            <h1>Lobby</h1>
            <div style={{
                flex: 1,
                float: 'right'
            }}>
                <Col>
                <Row>
                
                <span>
                    Min
                </span>
                <span>
                    Atual
                </span>
                <span>
                    Max
                </span>
               
                </Row>
                <Row>
                <h2>texto</h2>
                </Row>
                <Row>
                <Card></Card>
                </Row>
                </Col>
            </div>

            <div>
                {/* <p>Icone - Criador da sala</p> */}
            </div>
        </div >
    )
}

export default Lobby
{/*  */}