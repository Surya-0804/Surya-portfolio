import React from 'react';
import ProjectCard from '../sub/ProjectCard';

// Define project data
const projects = [
  {
    src: '/MediManage.png',
    title: 'Medi-Slot & Medi-Manage (In-Progress)',
    description:
      'Developed Medi-Manage, a ReactJS platform optimizing hospital workflows and Medi-Slot, a React Native app for OP appointment pre-booking, reducing wait times by 40%. Integrated both solutions, reducing booking time by 30%.',
  },
  {
    src: '/ShivamAI.png',
    title: 'Shivam-AI',
    description:
      'SHIVAM AI is a ReactJS web application designed to revolutionize educational content generation and foster a collaborative student community. Powered by an LSTM model, it generates intelligent, context-driven answers.',
  },
  {
    src: '/Spendlytic.png',
    title: 'Spendlytic-AI',
    description:
      'Engineered a robust financial management tool using Next.js, integrating Clerk for secure user authentication and Tailwind CSS for responsive design, reducing onboarding time by 40%.',
  },
  {
    src: '/Community.png',
    title: 'Community',
    description:
      'Built a platform using Express.js, Firebase, and Vanta.js to connect users through local clubs and discussions, increasing user participation in city-wide activities by 30%.',
  },
  {
    src: '/DSATracker.png',
    title: 'DSA Tracker',
    description:
      'A comprehensive platform for managing and tracking your Data Structures and Algorithms (DSA) journey, offering an intuitive interface and structured progress monitoring.',
  },
  {
    src: '/HireAHand.png',
    title: 'Hire-A-Hand',
    description:
      'Developed a freelancer marketplace using Firebase, React.js, and Vite, enabling task bidding and streamlined project hiring.',
  },
  {
    src: '/MusicApp.png',
    title: 'AudioHunt',
    description:
      'Built a music streaming app using Express.js, Node.js, and Firebase, integrating Last.fm API for track search and charts.',
  },
  {
    src: '/WeatherApp.png',
    title: 'Weather App',
    description:
      'Developed a React Native app with OpenWeatherMap API for real-time weather updates and forecasts.',
  },
  {
    src: '/TaskMate.png',
    title: 'TaskMate',
    description:
      'A modern and sleek task management application built with Next.js, Hasura, and ShadCN components.',
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
