import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer icons={true} />
    </>
  );
};

export default Layout;
