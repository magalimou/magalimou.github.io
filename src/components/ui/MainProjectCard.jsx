import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, description, techStack, repoLink, liveLink, image, reverse = false }) => {

  return (
    <div className={`animate-fadeInUp duration-700 mb-20 md:mb-30 justify-center align-center flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      
      <div className="relative md:w-2/3 lg:w-1/2 max-w-4xl h-85 overflow-hidden group rounded-xl shadow-inner shadow-black/30">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out 
               group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2" />
      </div>

      <div className="relative z-10 lg:w-1/2 md:w-2/3 pt-6">
        <h3 className={`text-3xl font-semibold text-end mb-6 ${reverse ? "text-start" : "text-end"}`}>{title}</h3>
        <p className={` text-xl mt-2 mb-7 p-6 border border-[#F18646] ${reverse ? "shadow-[16px_14px_22px_-10px_rgba(241,134,70,0.75)]" : "shadow-[-14px_14px_22px_-10px_rgba(241,134,70,0.75)] "} `}>{description}</p>

        <div className={`flex gap-4 mt-4 mb-8 text-lg text-[#b2a8fd] ${reverse ? "justify-start" : "justify-end"}`}>
          {techStack.map((tech, index) => (
            <span className={`hover:text-white transition duration-300 ${reverse ? "mr-3" : "ml-3"}`} key={index}>{tech}</span>
          ))}
        </div>

        
        <div className={`flex gap-4 mt-4 ${reverse ? "justify-start" : "justify-end"}`}>
            <a href={repoLink} aria-label="GitHub Repository Link"  target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={`hover:text-gray-400 text-4xl ${reverse ? "ml-3" : ""}`} />
            </a>
            <a href={liveLink} aria-label="Live Demo Link" target="_blank" rel="noopener noreferrer">
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;