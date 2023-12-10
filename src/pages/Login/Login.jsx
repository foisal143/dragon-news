import React, { useContext } from 'react';
import NavbarLocal from '../Navbar/NavbarLocal';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContextApi';

const Login = () => {
  const { loginEmailPass } = useContext(UserContext);
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginEmailPass(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(er => console.log(er.message));
    form.reset();
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
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="my-4">
              <label className="form-label" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter name"
                name="password"
              />
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
