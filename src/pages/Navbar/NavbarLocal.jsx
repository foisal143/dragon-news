import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import profilePic from '../../assets/user.png';
import './NavbarLocal.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContextApi';
const NavbarLocal = () => {
  const { user, logOut } = useContext(UserContext);
  const handlerLogout = () => {
    logOut()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <Navbar collapseOnSelect expand="lg" className=" my-4 container">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto navlink">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
          </Nav>
          <Nav className="flex align-items-center">
            <img
              className="user me-1"
              src={user ? user.photoURL : profilePic}
              alt=""
            />

            {user ? (
              <Button onClick={handlerLogout} variant="dark">
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLocal;
