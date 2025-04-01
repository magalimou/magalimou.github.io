import React from "react";
import Button from "../ui/Button";  

import profilePhoto from "../../assets/profile-picture.png";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <section className="px-60 py-30" >
            <div className="flex items-center justify-between">
                <div >
                <h2 className="text-4xl font-medium mb-4">Hi there, I'm Magali 👋</h2>
                <h1 className="text-7xl font-semibold mb-5">Software Developer</h1>
                <p className=" text-xl">I'm a software developer specializing in building (and sometimes designing)</p>
                <p className=" text-xl">high-performing digital experiences.</p>
                <p className=" text-xl mb-10">I enjoy working on both backend and frontend development.</p>
                <div className="flex items-center gap-4 justify-left">
                <Button text="Download CV" icon={faArrowDown} className='btn' />
                <Button text="" icon={faLinkedinIn} className='btn-icon' />
                <Button text="" icon={faGithub} className="btn-icon" />
                <Button text="" icon={faEnvelope} className="btn-icon" />
                </div>
                </div>
                <div className="w-1/4 max-w-md">    
                    <img className="w-full h-auto  rounded-full blur-shadow" src={profilePhoto} alt="" />
                </div>
            </div>
           
            <div className="circle-background-2"></div>
        </section>
    );
}

export default Hero;