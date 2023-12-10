import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
  return (
    <div>
      <Container>
        <div className="text-center py-4">
          <img src={logo} alt="" />
          <p className="my-2">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format('MMMM, dddd D, YYYY')}</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
