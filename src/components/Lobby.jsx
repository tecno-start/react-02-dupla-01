import React from 'react'
import { Row, Col, } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';

function Lobby() {
    return (
        <div>
            <h1>Lobby</h1> 
            <hr />
                <Col>
                    <Row className="d-flex justify-content-around">
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
                    </Col>
                    <hr />
                    <Col>
                    <Row>
                        <AiIcons.AiFillStar/>
                        <p>texto1</p>
                    </Row>
                    <Row>
                        <p>texto2</p>
                    </Row>
                    <Row>
                        <p>texto3</p>
                    </Row>
                </Col>


            <div>
                {/* <p>Icone - Criador da sala</p> */}
            </div>
        </div >
    )
}

export default Lobby
{/*  */ }