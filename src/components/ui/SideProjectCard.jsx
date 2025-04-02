import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons";


const SideProjectCard = ({ title, description, techStack, repoLink, liveLink }) => {
    return (
      <div className="bg-[#1C1222] p-9 shadow-md ">
        <div className="flex justify-between items-center">
            <FontAwesomeIcon className="text-[#FFA56F] text-4xl" icon={faFile}></FontAwesomeIcon>
            <FontAwesomeIcon className="text-2xl" icon={faArrowUpRightFromSquare} />
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
  