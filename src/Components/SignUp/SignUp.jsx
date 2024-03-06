import React from "react";
import MainLogo from "../../assets/images/TranscureLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputField from "../jsx/Common/InputField/InputField";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Container fluid className="sign-up-form">
        <Row>
          <Col className="text-center">
            <img src={MainLogo} alt="TransCure" />
            <h2 className="new-user-text">
              Register for a Participant Account
            </h2>
            <Card className="sign-up-card text-center">
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Create New Account
                </Card.Title>
                <Container>
                  <Row className="mt-3">
                    <Col sm={6} md={6} lg={6}>
                      <InputField
                        placeholder={"First Name"}
                        label={"First Name"}
                        type="text"
                        padding="10px 30px"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                      <InputField
                        placeholder={"Last Name"}
                        label={"Last Name"}
                        type="text"
                        padding="10px 30px"
                      />
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col>
                      <InputField
                        placeholder={"Email"}
                        label={"Enter Your Email Address"}
                        type="email"
                        padding="10px 30px"
                      />
                    </Col>
                  </Row>

                  <Row className="mt-3 mb-4">
                    <Col sm={6} md={6} lg={6}>
                      <InputField
                        placeholder={"xxxxxxxxxxxxx"}
                        label={"Password"}
                        type="password"
                        padding="10px 30px"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                      <InputField
                        placeholder={"xxxxxxxxxxxxx"}
                        label={"Confirm Password"}
                        type="password"
                        padding="10px 30px"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} md={6} lg={6}>
                      <Button as={Link} to="/login" className="btn-cancel">
                        Cancel
                      </Button>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                      <Button as={Link} to="/login" className="btn-submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>

            <Col className="form-footer">
              <p className="copy-right">
                Copyright <i className="fa-regular fa-copyright"></i> 2023
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

export default SignUp;
