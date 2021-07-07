import React from 'react';
import '../../style.scss';
import {HeroSection} from "../HeroSection/HeroSection";
import AboutSection from "../AboutSection/AboutSection";
import DownloadCV from "../common/DownloadCV/DownloadCV";
import Footer from "../common/Footer/Footer";


function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <DownloadCV/>
        <Footer/>
    </>
  );
}

export default Home;
