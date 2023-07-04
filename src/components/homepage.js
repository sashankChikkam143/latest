import React from "react";
import Footer from "./footer/Footer";
import Destionations from './destinations/Destionations'
import AboutUs from "./about-us/AboutUs";
import HotelsAndRestaurants from "./hotels-and-restaurants/HotelsAndRestaurants";
import Hero from './hero/Hero';
import CarRental from "./carrental";

const Home =()=>{
    return (
        <>
          <Hero />
          <Destionations />
          <HotelsAndRestaurants />
          <CarRental />
          <AboutUs />
          <Footer />
          </>
          );
}
export default Home;