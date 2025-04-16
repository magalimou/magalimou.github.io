import ProjectCard from "../ui/MainProjectCard";

import aliasImage from "../../assets/alias-game.jpeg";
import flickFinderImage from "../../assets/flick-finder.png";
import hospitalImage from "../../assets/hospital.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from "@fortawesome/free-solid-svg-icons";


const projects = [
    {
        title: "Alias Game API",
        description: "A RESTful API for a word-guessing game where teams compete by describing and guessing words within a time limit.",
        techStack: ["Node.js", "JavaScript", "Docker", "MongoDB"],
        repoLink: "https://github.com/magalimou/alias-game-api",
        liveLink: "",
        image: aliasImage,
        reverse: false,
    },
    {
      title: "Flick Finder",
      description: "A movie discovery web app that helps users find films, make reviews and create their own personalized lists. Integrates the TMDb API to fetch movie data.",
      techStack: ["HTML", "Angular", "CSS", "Typescript"],
      repoLink: "https://github.com/MateoCunsolo/flick.finder-front",
      liveLink: "",
      image: flickFinderImage,
      reverse: true,
    },
    {
      title: "Hospital Scheduler API",
      description: "A RESTful API  for managing hospital appointments. The system will find the nearest available appointment date with a doctor of the specified specialization.",
      techStack: ["Node.js", "Express.js", "Docker", "MySQL"],
      repoLink: "https://github.com/magalimou/hospital-appointment-scheduler",
      liveLink: "",
      image: hospitalImage,
      reverse: false,
    },

];

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 pt-30 sm:px-12 md:px-20 lg:px-40 xl:px-65 xl:py-10  ">
        <h2 className="font-medium text-3xl sm:text-3xl md:text-4xl lg:text-4xl "> <FontAwesomeIcon icon={faCode} className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mr-2" ></FontAwesomeIcon>Featured Projects 
        </h2>

         {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
         ))}
        
        <div className="top-11/13 left-/10 w-[0px] h-[0px] lg:w-[200px] lg:h-[200px]  circle-background-orange"></div>
    </section>
  );
};

export default Projects;
