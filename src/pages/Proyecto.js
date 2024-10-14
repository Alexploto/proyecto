

import Maindebuho from "@/Components/Maindebuho";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import React from 'react'
import CardContextProvider from "../../Context/CardContext";


const Proyecto = () => {
  return (
    <>
      <CardContextProvider>
        <Banner />
        <Navigation />
        <Maindebuho />
        <Footer />
      </CardContextProvider>
    </>
  );
};

export default Proyecto;
