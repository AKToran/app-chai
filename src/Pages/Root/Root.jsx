import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default Root;