import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavbarLocal from '../Navbar/NavbarLocal';
import RightNav from '../sharedPage/RightNav/RightNav';
import LeftNav from '../LeftNav/LeftNav';

const Home = () => {
  return (
    <div>
      <Container className="bg-secondary-subtle d-flex align-items-center p-3 h-100 ">
        <button className="btn btn-danger">Latest</button>
        <Marquee speed={100}>
          <p className="m-0">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </Container>
      <NavbarLocal></NavbarLocal>
      <Container>
        <Row md={4} className="gap-4">
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={5}>2 of 3</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
