import React, { useState } from "react";
import  slides  from "../../data/slidesData";

// Prop name remains onButtonClick, which is consistent with the fixed Home.jsx
const HeroCarousel = ({ onButtonClick }) => { 
  const [currentSlide, setCurrentSlide] = useState(0);
// ... (rest of the component is unchanged as it was correct)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative overflow-hidden shadow-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative h-96 sm:h-[400px] lg:h-[550px]">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4">
              <p className="text-white text-3xl md:text-5xl font-medium text-center mb-6 drop-shadow-lg font-sans">
                {slide.text}
              </p>
              <div className="flex space-x-4">
                <button onClick={() => onButtonClick(slide.button1Text)} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 shadow-md">
                  {slide.button1Text}
                </button>
                <button onClick={() => onButtonClick(slide.button2Text)} className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-500 font-semibold rounded-lg transition duration-200 shadow-md">
                  {slide.button2Text}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-r-lg text-white hover:bg-opacity-50">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-l-lg text-white hover:bg-opacity-50">
        ›
      </button>
    </div>
  );
};

export default HeroCarousel;