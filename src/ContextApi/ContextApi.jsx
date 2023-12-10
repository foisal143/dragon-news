import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase';
export const UserContext = createContext(null);

const ContextApi = ({ children }) => {
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  //  google sign in logic here
  const googleSigninUser = () => {
    return signInWithPopup(auth, googleProvaider);
  };
  // create user  with email and password logic here
  const createUser = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email password
  const loginEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout logic here
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    googleSigninUser,
    logOut,
    createUser,
    loginEmailPass,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default ContextApi;
