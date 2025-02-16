import React from "react";
import heroImage from '../assets/HeroImage.png';

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background with overlay to create the dark effect with pink/magenta accents */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.4) saturate(1.5)"
          }}
      />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          On-Stage Events
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
          To Bring out the beast in you
        </p>
      </div>
      
    </div>
  );
};

export default HeroPage;