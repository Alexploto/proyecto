

import React from "react";
//import AlertDialog from '@/Components/organismos/AlertDialog';
import ModalIndex from "@/Components/organismos/ModalIndex";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import MainCentro from "../Components/MainCentro";
import Banner from "../Components/Banner";
import ScrollToTop from "react-scroll-to-top";
import CartComponent from "../Components/CartComponent";
import CardContextProvider from "../../Context/CardContext";




const index = () => {
  return (
    <>
      <CardContextProvider>
        <ModalIndex />
        <ScrollToTop smooth color="#D98504" />
        <Banner />
        <Navigation />
        <MainCentro />
        <Footer />
      </CardContextProvider>
    </>
  );
};

export default index;


