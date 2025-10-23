import React, { useState } from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import ProjectsSection from "../components/home/ProjectsSection.jsx";
import MessageModal from "../components/ui/MessageModal.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import NewsHeroSection from "../components/home/newsSection.jsx";
import CallbackAndTestimonials from "../components/home/TestimonialsSection.jsx"

const Home = () => {
  const [message, setMessage] = useState(null);

  // Renamed handler to onButtonClick for consistency with components
  const handleButtonClick = (buttonText) =>
    setMessage({ title: "Button Clicked", text: `You clicked '${buttonText}'` });

  return (
    <>
      <HeroCarousel onButtonClick={handleButtonClick} />
      <FeaturesSection onButtonClick={handleButtonClick} />
      <ServicesSection onButtonClick={handleButtonClick} />
      <ProjectsSection onButtonClick={handleButtonClick} />
      <MessageModal message={message} onClose={() => setMessage(null)} />
    <AboutSection/>
    <NewsHeroSection/>
   <CallbackAndTestimonials/>
    </>
  );
};

export default Home;