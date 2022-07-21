import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

const Paths = () => {
  const pathsList = [{ path: '/', component: <HomePage /> }];

  return (
    <>
      <Routes>
        {pathsList.map((item) => (
          <Route exact path={`${item.path}`} element={item.component} />
        ))}
      </Routes>
    </>
  );
};

export default Paths;
