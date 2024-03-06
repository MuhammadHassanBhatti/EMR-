import React from "react";
import LoginLeftDesign from "../LoginLeftDesign/LoginLeftDesign";
import LoginForm from "../LoginForm/LoginForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginScreen = () => {
  return (
    <>
      <div className="parent-class">
        <div className="container-fluid">
          <Row>
            <Col lg="6" style={{padding:0}}>
              <LoginLeftDesign />
            </Col>

            <Col lg="6">
              <LoginForm />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
