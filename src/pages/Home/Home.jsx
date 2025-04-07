import React from 'react';
import Header from '../../components/Header';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import FeaturesSection from './HomeComponents/FeaturesSection';
import TestimonialsSection from './HomeComponents/TestimonialsSection';
import ContactSection from './HomeComponents/ContactSection';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;