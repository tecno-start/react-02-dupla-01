import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';
import ModalRules from './ModalRules';


function Lobby({ participants, owner, values }) {


    return (
        <div>
            <div className="text-center pb-4">
                <h1>Lobby</h1>
            </div>
            <Row className="d-flex justify-content-around">
                <span className="font-weight-bold">
                    Número de Jogadores:
                </span>
            </Row>
            <hr />
            <Col>

                <Row className="d-flex justify-content-around">
                    <span>
                        Min: {values.minimoParticipantes}
                    </span>
                    <span>
                        Atual: {participants.length > 0 ? participants.length : ''}
                    </span>
                    <span>
                        Max: {values.maximoParticipantes}
                    </span>
                </Row>
            </Col>
            <hr />
            <Col>
                {participants.map((participant) =>
                    <Row key={participant.id}>
                        {participant.id === owner.id && <AiIcons.AiFillStar />}
                        <p>{participant.name}</p>
                    </Row>)}
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