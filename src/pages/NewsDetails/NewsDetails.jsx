import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavbarLocal from '../Navbar/NavbarLocal';
import { NewsContext } from '../../layouts/Main';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../sharedPage/RightNav/RightNav';

const NewsDetails = () => {
  const id = useLoaderData();
  const articles = useContext(NewsContext);
  const news = articles.find(info =>
    info.source.id ? info.source.id === id : info.source.name === id
  );
  const {
    author,
    urlToImage,
    url,
    title,
    source,
    publishedAt,
    description,
    content,
  } = news;
  return (
    <div>
      <NavbarLocal></NavbarLocal>
      <Container className="">
        <Row md={4} className="gap-2 d-flex justify-content-between">
          <Col className="scroll" lg={8}>
            <h4>Dragon news</h4>
            <div>
              <img className="w-100 rounded" src={urlToImage} alt="" />
              <div className="my-3">
                <h3>{title}</h3>
                <p>
                  <span className="fs-5 fw-bold">Description:</span>{' '}
                  {description}
                </p>
                <p>
                  <span className="fs-5 fw-bold">Content:</span> {content}
                </p>
                <Link to="/">
                  <button className="btn btn-danger">Read All News</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsDetails;
