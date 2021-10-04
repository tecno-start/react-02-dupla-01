import React from 'react';
import '../App.css'
import Sidebar from '../components/Sidebar';
import { Row, Col, Card } from 'reactstrap';


function HomePage() {
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
                            <h1>Home Page</h1>
                        </Card>
                    </Col>
                </Row>
            </div >
        </div>
    )
}

export default HomePage;
