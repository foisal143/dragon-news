import React, { useContext } from 'react';
import { UserContext } from '../ContextApi/ContextApi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user } = useContext(UserContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
