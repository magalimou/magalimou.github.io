import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const ProjectCard = ({ title, description, techStack, repoLink, liveLink, image, reverse = false }) => {
  return (
    <div className={`mb-30 justify-center align-center flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      
      <div className="border-2 border-blue-700 md:w-2/3 lg:w-1/2 max-w-4xl">
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>

      <div className="border-2 border-red-700 lg:w-1/2 md:w-2/3 pt-6">
        <h3 className="text-3xl font-semibold text-end mb-6">{title}</h3>
        <p className=" text-xl mt-2 mb-7 p-6 border border-[#F18646] blur-orange-shadow ">{description}</p>

        <div className="flex gap-4 mt-4 mb-8 text-lg text-[#b2a8fd] justify-end ">
          {techStack.map((tech, index) => (
            <span className="hover:text-white transition duration-300 ml-3" key={index}>{tech}</span>
          ))}
        </div>

        
        <div className="flex gap-4 mt-4 justify-end">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 text-4xl" />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;