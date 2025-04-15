import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, techStack, repoLink, liveLink, image, reverse = false }) => {

  return (
    <div className={`animate-fadeInUp duration-700 mt-10 mb-20 md:mb-35 md:mt-20  justify-center align-center flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      
      <div className="relative md:w-2/3 lg:w-1/2 max-w-4xl h-85 overflow-hidden group rounded-xl shadow-inner shadow-black/30">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out 
               group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2" />
      </div>

      <div className="relative z-10 lg:w-1/2 md:w-2/3 pt-6">
        <h3 className={`text-3xl font-semibold text-end mb-6 ${reverse ? "text-start" : "text-start sm:text-end"}`}>{title}</h3>
        <p className={` text-xl mt-2 mb-7 p-6 border border-[#F18646] ${reverse ? "shadow-[16px_14px_22px_-10px_rgba(241,134,70,0.75)] text-start" : "shadow-[-14px_14px_22px_-10px_rgba(241,134,70,0.75)] lg:text-right"} `}>{description}</p>

        <div className={`flex gap-4 mt-4 mb-6 text-lg text-[#b2a8fd] ${reverse ? "justify-start" : "justify-end"}`}>
          {techStack.map((tech, index) => (
            <span className={`hover:text-white transition duration-300 ${reverse ? "mr-3" : "ml-3"}`} key={index}>{tech}</span>
          ))}
        </div>

        
        <div className={`flex  ${reverse ? "justify-start" : "justify-end"}`}>
          
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository Link"
              className="inline-flex font-medium items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-[#271731]/20 to-[#271731]/20 text-white hover:text-white hover:from-[#b2a8fd]/40 hover:to-[#8c7cf6]/40 transition duration-300 border-1 border-[#8B8092] "
            >
              <FontAwesomeIcon icon={faCode} />
              Code
            </a>

            <a href={liveLink} aria-label="Live Demo Link" target="_blank" rel="noopener noreferrer">
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;