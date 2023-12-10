import React, { useContext } from 'react';
import NavbarLocal from '../Navbar/NavbarLocal';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContextApi';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(UserContext);
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.iamge.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        profileUpdate(user, name, img);
      })
      .catch(er => console.log(er.message));
    form.reset();
  };
  const profileUpdate = (user, name, url) => {
    updateProfile(user, { displayName: name, photoURL: url })
      .then(() => {})
      .catch(er => console.log(er.message));
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
                type="password"
                className="form-control"
                placeholder="Enter name"
                name="password"
              />
            </div>
            <input
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
