import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        DHRUVA'24<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873521/Glimpse%20of%20dhruva%202024/sowvcznx7dwwugmqyll3.jpg"
        alt="Face Paint Image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873522/Glimpse%20of%20dhruva%202024/fge7x06c8jawsv9nytbw.png"
        alt="Melam Stage Image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873522/Glimpse%20of%20dhruva%202024/jhut99xnl6emxfpurbld.jpg"
        alt="Stage Dance"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873523/Glimpse%20of%20dhruva%202024/sozzgurrjem4msvdacpp.png"
        alt="Celebrity on stage"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873527/Glimpse%20of%20dhruva%202024/cwva1icpbchjifrvdnu0.jpg"
        alt="Judges Image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873524/Glimpse%20of%20dhruva%202024/afp3xhwhxmcnm3p3pk3t.jpg"
        alt="Purple Celebrity Standing Image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873528/Glimpse%20of%20dhruva%202024/r1gbuwpeuyslvcq4fzmo.jpg"
        alt="Every One Posing On Stage"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dglhpdf4h/image/upload/v1739873526/Glimpse%20of%20dhruva%202024/lbkvsvgzwlpwj9lve1w1.png"
        alt="Melam Stage Blue"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-52 md:w-80"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};

export default DragCards;