"use client";

import { useState, useEffect } from "react";

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/home_banner/1-1.png',
    '/home_banner/2.png', 
    '/home_banner/3-1.png',
    '/home_banner/Artboard-24.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } sm:bg-cover`}
          style={{ 
            backgroundImage: `url(${slide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}