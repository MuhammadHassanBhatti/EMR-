import React from "react";
import MainLogo from "../../assets/images/TranscureLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardText from "react-bootstrap/esm/CardText";
import InputField from "../jsx/Common/InputField/InputField";

const ForgetPassword = () => {
  return (
    <>
      <Container fluid className="forget-form">
        <Row>
          <Col className="text-center">
            <img src={MainLogo} alt="TransCure" />
            <h2 className="forget-text">Forget Password</h2>
            <Card className="card text-center">
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Enter your registered email address
                </Card.Title>

                <Card.Text className="mt-4 mb-4">

                  <InputField
                    placeholder={"Enter your Registered Email Address"}
                    label={"Email"}
                    type="email"
                    padding="10px 30px"
                   
                  />
                </Card.Text>
              
                <Button as={Link} to="/new-password" className="btn-reset">
                  SEND RESET LINK
                </Button>
                <CardText className="back-login-link">
                  <Link to="/login" className="back-login">
                    Back to Login
                  </Link>
                </CardText>
              </Card.Body>
              <Card.Footer className="text-muted">
                If you cannot find the confirmation email in your inbox, it is
                worth checking in your spam or junk section
              </Card.Footer>
            </Card>
            <Col className="form-footer">
              <p className="copy-right">
                Copyright <i class="fa-regular fa-copyright"></i> 2023
                <span className="web-link"> Transcure.net</span> All rights
                reserved.
              </p>
              <p className="terms">Terms & Conditions</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgetPassword;
