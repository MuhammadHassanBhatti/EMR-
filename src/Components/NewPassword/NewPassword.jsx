import React from "react";
import MainLogo from "../../assets/images/TranscureLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputField from "../jsx/Common/InputField/InputField";
import CardText from "react-bootstrap/esm/CardText";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <>
      <Container fluid className="new-password-form">
        <Row>
          <Col className="text-center">
            <img src={MainLogo} alt="TransCure" />
            <h2 className="forget-text">Create New Password</h2>
            <Card className="new-pass-card text-center">
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Enter New Password
                </Card.Title>
                <CardText className="mt-4">
                  <InputField
                    placeholder={"xxxxxxxxxxxxx"}
                    label={"New Password"}
                    type="password"
                    padding="10px 30px"
                  />
                </CardText>
                <CardText>
                  {" "}
                  <InputField
                    placeholder={"xxxxxxxxxxxxx"}
                    label={"Confirm Password"}
                    type="email"
                    padding="10px 30px"
                  />
                </CardText>

                <p className="match-text">Both Password Must match</p>
                <Button as={Link} to="/login" className="btn-reset">Submit</Button>
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

export default NewPassword;
