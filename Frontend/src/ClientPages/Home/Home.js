import React from "react";
import Caroussel from "../../Components/Carousel/Carousel";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import OurTeam from "../../Components/OurTeam/OurTeam";
const Home = () => {
  return (
    <div>      
        <Navbar />
        <Caroussel />
        <About/>
        <OurTeam/>
        <Footer/>
    </div>
  );
};

export default Home;