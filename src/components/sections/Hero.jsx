import React from "react";
import Button from "../ui/Button";  

import profilePhoto from "../../assets/profile-picture.png";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
      <section className="px-6 py-30 md:mt-3 sm:px-12 md:px-20 lg:px-40 xl:px-70 sm:py-45 lg:py-45 xl:mt-0 pb-10" >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:w-3/4">
            <h2 className="text-2xl sm:text-4xl md:text-2xl lg:text-2xl xl:text-3xl font-medium mb-2 lg:mb-4">Hi there, I'm Magali 👋</h2>
            <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold lg:mb-5 mb-3">Software Developer</h1>
            <p className="sm:text-xl md:text-base lg:text-lg xl:text-xl lg:pr-10 sm:px-0 px-5">
              I'm a software developer specializing in building (and sometimes designing) high-performing digital experiences.
            </p>
            <p className="sm:text-xl md:text-base lg:text-lg xl:text-xl mb-10 sm:px-0 px-5">
              I enjoy working on both backend and frontend development.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button text="Download CV" icon={faArrowDown} className="btn text-base" />
              
              <div className="relative group">
                <Button text="" icon={faLinkedinIn} className="btn-icon" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                  text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition
                  pointer-events-none whitespace-nowrap z-50">
                  LinkedIn
                </span>
              </div>

              <div className="relative group">
                <Button text="" icon={faGithub} className="btn-icon" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                  text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition
                  pointer-events-none whitespace-nowrap z-50">
                  GitHub
                </span>
              </div>

              <div className="relative group">
                <Button text="" icon={faEnvelope} className="btn-icon" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                  text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition
                  pointer-events-none whitespace-nowrap z-50">
                  Gmail
                </span>
              </div>
            </div>
          </div>
  
          <div className="w-40 sm:w-60 md:w-1/3 lg:w-1/3 max-w-xs">
            <img
              className="w-full h-auto rounded-full blur-shadow"
              src={profilePhoto}
              alt="Profile"
            />
          </div>
        </div>
      </section>
    );
  };
  

export default Hero;