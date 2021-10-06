import React from 'react';
import Sidebar from '../components/Sidebar';
import { Row, Col, Card } from 'reactstrap';
import ButtonGoBack from '../components/ButtonGoBack';

function SearchRoom() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Row
                    style={{
                        height: '50vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Col md={6} lg={4}>
                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <h1>Pagina Buscar Sala</h1>
                            <ButtonGoBack/>
                        </Card>
                    </Col>
                </Row>
            </div >
        </div>
    )
}

export default SearchRoom