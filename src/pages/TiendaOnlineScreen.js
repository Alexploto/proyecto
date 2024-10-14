

import React from "react";
import CardContextProvider from "../../Context/CardContext";
import CartComponent from "../Components/CartComponent";
import Banner from "../Components/Banner";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "react-scroll-to-top";

const TiendaOnLine = () => {
  return (
    <>
      <CardContextProvider>
        <ScrollToTop smooth color="#D98504" />
        <Banner />
        <Navigation />
        <CartComponent />
        <Footer />
      </CardContextProvider>
    </>
  );
};

export default TiendaOnLine;
