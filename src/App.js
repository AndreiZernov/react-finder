import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'


function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default withRouter(App);
