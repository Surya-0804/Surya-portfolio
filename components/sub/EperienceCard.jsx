import Image from 'next/image';
import React from 'react';

const ExperienceCard = () => {
  const points = [
    'Assisting team members and community members in learning and mastering React.js through workshops, tutorials, and one-on-one mentoring.',
    'Engaging with the community to provide technical support, answer questions, and foster a positive learning environment.',
    'Providing feedback on ML and DL projects and helping others troubleshoot issues and improve their code.',
    'Organizing ML and DL learning sessions and promoting a culture of continuous learning and skill development.',
  ];

  return (
    <div className="flex flex-col items-center p-4 border text-white rounded-xl mx-10">
      <div className="flex items-center w-full gap-4">
        <Image src="/logo/logo-circle.png" width={50} height={50} alt="logo" />
        <div className="flex items-center justify-between w-full pr-5">
          <h2 className="text-lg font-bold">Company Name</h2>
          <p className="text-lg">Job Title</p>
        </div>
      </div>
      <ul className="flex flex-col self-start mt-2 ml-8 list-disc list-inside">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
