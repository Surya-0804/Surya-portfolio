'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sendForm = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/api/contactMe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          resolve('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          reject('Failed to send message. Please try again later.');
        }
      } catch (error) {
        reject('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    });

    toast.promise(sendForm, {
      loading: 'Sending your message...',
      success: (msg) => msg,
      error: (msg) => msg,
    });
  };

  return (
    <div className="flex flex-col items-center bg-[#1A1A2E] rounded-xl shadow w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-10 w-full p-6 z-[20]"
      >
        <h1 className="flex flex-col self-start font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          <span className="text-[40px] text-white font-bold">Contact Me</span>
          <span>Get in touch</span>
        </h1>

        <div className="flex flex-col w-full gap-3">
          <label
            className="text-left text-white font-bold text-xl"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            class="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          />
        </div>

        <div className="flex flex-col w-full gap-3">
          <label
            className="text-left text-white font-bold text-xl"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            class="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          />
        </div>

        <div className="flex flex-col w-full gap-3">
          <label
            className="text-left text-white font-bold text-xl"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            class="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            rows="3"
          />
        </div>
        <button class="cssbuttons-io-button" type="submit">
          <span>Contact Me</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
