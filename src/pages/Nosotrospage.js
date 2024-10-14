

import Banner from '@/Components/Banner'
import Footer from '@/Components/Footer';
import Navigation from '@/Components/Navigation'
import Nosotros from '@/Components/Nosotros';
import React from 'react'
import CardContextProvider from '../../Context/CardContext';

const Nosotrospage = () => {
  return (
    <>
      <CardContextProvider>
        <Banner />
        <Navigation />
        <Nosotros />
        <Footer />
      </CardContextProvider>
    </>
  );
}

export default Nosotrospage
