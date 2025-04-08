import React from 'react';
import Header from '../../components/Header';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import FeaturesSection from './HomeComponents/FeaturesSection';
import TestimonialsSection from './HomeComponents/TestimonialsSection';
import ContactSection from './HomeComponents/ContactSection';
import Navbar from '../../components/NavBar';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;