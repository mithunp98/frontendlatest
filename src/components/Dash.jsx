import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import SideNavBar from "../container/SideBar";
import NavBar from "../container/NavBar"
import Content from "../container/Content";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dash() {
    


  return(
    <div>
      <NavBar/>
      <Container fluid className="Main-content">
        <Row className="full-width row-lg-2">
        <Col  className="col-xs-0 col-md-2 SideBar"><SideNavBar/></Col>
        <Col  className=" col-xs-12 col-md-10 RightContent"><Content/></Col>
        </Row>
      </Container>
    </div>

  )
}


export default Dash;