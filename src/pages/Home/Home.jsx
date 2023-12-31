import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavbarLocal from '../Navbar/NavbarLocal';
import RightNav from '../sharedPage/RightNav/RightNav';
import LeftNav from '../LeftNav/LeftNav';
import { NewsContext } from '../../layouts/Main';
import News from '../News/News';
import './Home.css';

const Home = () => {
  const news = useContext(NewsContext);
  console.log(news);
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
      <Container className="">
        <Row md={4} className="gap-2 d-flex justify-content-between">
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col className="scroll" lg={5}>
            {news &&
              news.map(info => <News key={info.source.id} info={info}></News>)}
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
