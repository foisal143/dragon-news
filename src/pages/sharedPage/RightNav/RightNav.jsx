import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';
import { useContext } from 'react';
import { UserContext } from '../../../ContextApi/ContextApi';

import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
const RightNav = () => {
  const { googleSigninUser } = useContext(UserContext);
  const handlerGoogleLogin = () => {
    googleSigninUser()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div>
      <div>
        <h4 className="mb-3">Login With</h4>
        <Button
          onClick={handlerGoogleLogin}
          className="w-100"
          variant="outline-info"
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100 mt-2" variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="my-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <span className="text-primary me-1">
              <FaFacebook />
            </span>
            facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="text-info me-1">
              <FaTwitter></FaTwitter>
            </span>
            twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {' '}
            <span className="text-danger  me-1">
              <FaInstagram />
            </span>{' '}
            instagram{' '}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className=" px-1 mt-5 py-4 bg-secondary-subtle">
        <h4>Q-Zone</h4>
        <img className="my-2" src={qzone1} alt="" />
        <img className="my-2" src={qzone2} alt="" />
        <img className="my-2" src={qzone3} alt="" />
      </div>
      <div className="my-4 position-relative">
        <img className="w-100 h-100" src={bg} alt="" />
        <div className="position-absolute mt-5 py-5  top-0 text-white text-center">
          <h2>Create an Amazing Newspaper</h2>
          <p className="px-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
