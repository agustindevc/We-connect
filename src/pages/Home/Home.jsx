import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import FeaturesSection from '../../components/FeaturesSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;