// import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import ButtonsTest from './components/ButtonsTest/ButtonsTest';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname == '/' && <ButtonsTest />}
    </>
  );
}

export default App;
