import React, { useEffect, useState } from 'react';
import { Button, Card, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';
import moment from 'moment';
const LeftNav = () => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);
  return (
    <>
      <h4>All Category </h4>
      <div>
        {categorys.map(category => (
          <Link
            className="text-decoration-none text-secondary my-4 d-block"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text className="d-flex  justify-content-between">
            <span>Sports</span>{' '}
            <p className="text-end">
              <FaCalendar className="text-secondary"></FaCalendar>{' '}
              <span className="ms-2">{moment().format('ddd D, YYYY')}</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '100%', margin: '10px 0' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text className="d-flex  justify-content-between">
            <span>Sports</span>{' '}
            <p className="text-end">
              <FaCalendar className="text-secondary"></FaCalendar>{' '}
              <span className="ms-2">{moment().format('ddd D, YYYY')}</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text className="d-flex  justify-content-between">
            <span>Sports</span>{' '}
            <p className="text-end">
              <FaCalendar className="text-secondary"></FaCalendar>{' '}
              <span className="ms-2">{moment().format('ddd D, YYYY')}</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LeftNav;
