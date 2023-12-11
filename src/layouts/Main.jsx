import React, { createContext } from 'react';
import Header from '../pages/sharedPage/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
export const NewsContext = createContext([]);
const Main = () => {
  const { articles } = useLoaderData();

  return (
    <NewsContext.Provider value={articles}>
      <Header></Header>
      <Outlet></Outlet>
    </NewsContext.Provider>
  );
};

export default Main;
