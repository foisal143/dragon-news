import React, { useContext, useRef, useState } from 'react';
import NavbarLocal from '../Navbar/NavbarLocal';
import {
  Link,
  useLinkClickHandler,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContextApi';

const Login = () => {
  const passRf = useRef();
  const [error, setError] = useState('');
  const { loginEmailPass } = useContext(UserContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmailPass(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        navigate(location.state.pathname);
      })
      .catch(er => setError(er.message));
    form.reset();
  };
  const handlerPasswordShow = e => {
    if (e.target.checked) {
      passRf.current.type = 'text';
    } else {
      passRf.current.type = 'password';
    }
  };
  return (
    <div style={{ minHeight: '75vh', backgroundColor: 'aliceblue' }}>
      <NavbarLocal></NavbarLocal>
      <div className="d-flex justify-content-center">
        <div className="w-50 bg-white p-5">
          <h3 className="text-center">Login your account</h3>
          <form
            onSubmit={handlerFormSubmit}
            action=""
            className="my-4 w-75 mx-auto"
          >
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="my-4">
              <label className="form-label" htmlFor="email">
                Password
              </label>
              <input
                ref={passRf}
                required
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
              />
              <p className="text-danger">
                <small>{error}</small>
              </p>
            </div>
            <div>
              <input
                onChange={handlerPasswordShow}
                type="checkbox"
                name="check"
                id="check"
              />{' '}
              <label htmlFor="check">Show Pssword</label>
            </div>
            <input
              className="form-control  mt-4 bg-secondary"
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-center">
            <small>
              Dont’t Have An Account ?<Link to="/register"> Register</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
