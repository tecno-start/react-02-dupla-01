import React, { useState } from 'react'
import { Row, Col, Button, Tooltip } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';
import ModalRules from './ModalRules';


function Lobby() {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);


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
                    <AiIcons.AiFillStar />
                    <p>texto1</p>
                </Row>
                <Row>
                    <p>texto2</p>
                </Row>
                <Row>
                    <p>texto3</p>
                </Row>
            </Col>
            <div className="d-flex justify-content-center">
                <Row>
                    <Button
                        size="lg"
                        className="bg-gradient-theme-left border-0">
                        Jogar
                    </Button>
                    <ModalRules />
                </Row>
            </div>


        </div >
    )
}

export default Lobby