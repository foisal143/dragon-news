import React, { useContext, useRef, useState } from 'react';
import NavbarLocal from '../Navbar/NavbarLocal';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContextApi';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const passRf = useRef();
  const [error, setError] = useState('');
  const { createUser } = useContext(UserContext);
  const handlerFormSubmit = e => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.iamge.value;
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError('password should be one uppercase');
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setError('password should be one lowercase');
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError('password should be one digit');
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('password should be one special charecter');
      return;
    } else if (password.length < 6) {
      setError('Password must be 6 cherecter');
      return;
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        profileUpdate(user, name, img);
      })
      .catch(er => setError(er.message));
    form.reset();
  };
  const profileUpdate = (user, name, url) => {
    updateProfile(user, { displayName: name, photoURL: url })
      .then(() => {})
      .catch(er => setError(er.message));
  };
  // show password
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
          <h3 className="text-center">Register your account</h3>
          <form
            onSubmit={handlerFormSubmit}
            action=""
            className="my-4 w-75 mx-auto"
          >
            <div>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="my-4">
              <label className="form-label" htmlFor="image">
                Image
              </label>
              <input
                required
                type="text"
                name="iamge"
                className="form-control"
                placeholder="Enter image url"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
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
            <input
              onChange={handlerPasswordShow}
              type="checkbox"
              name="check"
              id="check"
            />{' '}
            <label htmlFor="check">Show Pssword</label>
            <input
              required
              className="form-control  mt-4 bg-secondary"
              type="submit"
              value="Register"
            />
          </form>
          <p className="text-center">
            <small>
              Allready have an account ?<Link to="/login"> Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
