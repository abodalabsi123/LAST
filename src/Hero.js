import React, { useState, useEffect } from 'react';
import './Hero.css'
import dubai1 from './image/dubai1.webp';
import dubai2 from './image/dubai2.webp';
import dubai3 from './image/dubai3.webp';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(dubai1);
  const images = [dubai1, dubai2, dubai3];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <header className="relative ">
      <h1 className="text-4xl font-bold  text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        WElCOME TO AlHAYA COMMERCIAL GROUP  
      </h1>
      
      <img class="object-cover h-full w-full" src={currentImage} alt="Hero Image" />
    </header>
  );
};

export default Hero;
