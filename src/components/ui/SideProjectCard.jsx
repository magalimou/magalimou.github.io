import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";



const SideProjectCard = ({ title, description, techStack, repoLink, liveLink }) => {
    return (
      <div className="bg-[#1C1222] p-9 shadow-md hover:shadow-xl/30 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-gray-400/30">
        <div className="flex justify-between items-center">
            <FontAwesomeIcon className="text-[#FFA56F] text-4xl" icon={faFile}></FontAwesomeIcon>
            <div className="gap-5 flex items-center">
              <div className="relative group">
              {repoLink && (
                  <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className=" cursor-pointer text-2xl hover:text-orange-300 transition" icon={faCode} />
                  </a>
                )}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                              bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                              transition pointer-events-none z-10">
                Code
              </span>
              </div>

              <div className="relative group">
                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className=" cursor-pointer text-2xl hover:text-orange-300 transition" icon={faArrowUpRightFromSquare} />
                  </a>
                )}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                                bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                transition pointer-events-none z-10">
                  Live
                </span>
              </div>

            </div>
        </div>
        <div>
            <h3 className="text-white text-2xl font-semibold mt-4">{title} </h3>
            <p className="text-base mt-2 mb-4"> {description}</p>
            <div className="">
            {techStack.map((tech,index) => (
                <span key={index} className="text-base font-semibold text-[#FFA56F] mr-4" >{tech} </span>
            ))}
            </div>
        </div>
      </div>
    );
  };
  
export default SideProjectCard;
  