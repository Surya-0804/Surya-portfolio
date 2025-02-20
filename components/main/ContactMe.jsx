import React from 'react';
import ContactForm from '../sub/ContactForm';
import dynamic from 'next/dynamic';

// Dynamically import EarthCanvas to avoid SSR issues
const EarthCanvas = dynamic(() => import('../sub/EarthCanvas'), { ssr: false });

const ContactMe = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-16 py-16 w-full"
      id="contact-Me"
    >
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <ContactForm />
      </div>

      {/* 3D Earth Canvas */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] z-[20] cursor-pointer">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default ContactMe;
