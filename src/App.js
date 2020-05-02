import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
import LoadingData from "./components/LoadingData";
import { useDataItems } from "./contexts/dataItems-context";

const App = () => {
  const { loading } = useDataItems();
  return (
    <>
      {loading ? (
        <LoadingData />
      ) : (
        <>
          <Header />
          <Routes />
          <Footer />
        </>
      )}
    </>
  );
};

export default withRouter(App);
