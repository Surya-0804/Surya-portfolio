import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-360px] h-[850px] w-full left-0 z-[1] object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
