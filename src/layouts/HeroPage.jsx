import React from "react";
import heroImage from '../assets/HeroImage.png';
import heroImage2 from '../assets/OffStageImage.png'
const HeroPage = ({OnStage,title,tagline}) => {
  return (
    <div className=" h-screen w-full bg-black overflow-hidden sticky">
      {/* Background with overlay to create the dark effect with pink/magenta accents */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${OnStage?heroImage:heroImage2})`,
            filter: "brightness(0.4) saturate(1.5)"
          }}
      />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
          {tagline}
        </p>
      </div>
      
    </div>
  );
};

export default HeroPage;