import React from "react";
import SideBar from "../SideBar/SideBar";
import HeaderNavBar from "../Header/HeaderNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDetails from "../UserDetails/UserDetails";

const Dashboard = () => {
  return (
    <div className="App">
      <HeaderNavBar />
      <Container fluid className="user-details">
        <Row>
          <Col style={{padding:"0px"}} lg="3">
            <SideBar />
          </Col>
          <Col style={{padding:"0px"}} lg="9">
            <UserDetails/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

