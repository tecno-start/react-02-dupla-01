import AuthFormRegist from '../components/AuthFormRegist';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

function AuthRegistPage() {
  return (
    <div>
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthFormRegist />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default AuthRegistPage;


