import React from 'react';
import ButtonGoBack from '../components/ButtonGoBack';
import { Row, Col, Card } from 'reactstrap';

function RedefinePassword() {
    return (
        <div className="bg-gradient-theme-left border-0">

            <Row 
                style={{
                    height: '50vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Col  md={6} lg={4}>
                    <Card body style={{
                        borderRadius: '10px'
                    }}>
                        <h1>Redefinir Senha</h1>
                        <ButtonGoBack />
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default RedefinePassword
