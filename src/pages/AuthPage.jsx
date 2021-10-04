import AuthForm from '../components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

function AuthPage() {
  return (
    <div>
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body style={{
            borderRadius: '10px'
          }}>
            <AuthForm />
          </Card>
        </Col>
      </Row>
    </div >
  );
}
export default AuthPage;


