import React from 'react';
import ContactForm from '../sub/ContactForm';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import EarthCanvas to avoid SSR issues
const EarthCanvas = dynamic(() => import('../sub/EarthCanvas'), {
  ssr: false,
});

const ContactMe = () => {
  return (
    <div
      className="flex items-center justify-around py-20 w-full"
      id="contact-Me"
    >
      {/* <Image
        src="/contactme/globe.gif"
        className="w-1/2 h-auto"
        width={1000}
        height={1000}
      /> */}

      <div className="flex flex-col  justify-between items-center w-1/3">
        <ContactForm />
      </div>
      <div className="w-1/2 h-[900px] z-[20] cursor-pointer">
        <EarthCanvas />
      </div>
      {/* <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="w-1/4 h-auto bg-white rounded-full border-2 border-[#1A1A2E]"
        src="/contactme/NightEarth2.mp4"
      /> */}
    </div>
  );
};

export default ContactMe;
