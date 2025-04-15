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
        repoLink: "https://github.com/tu-usuario/alias-game",
        liveLink: "https://alias-game.vercel.app",
        image: aliasImage,
        reverse: false,
    },
    {
      title: "Flick Finder",
      description: "A movie discovery web app that helps users find films, make reviews and create their own personalized lists. Integrates the TMDb API to fetch movie data.",
      techStack: ["HTML", "Angular", "CSS", "Typescript"],
      repoLink: "https://github.com/tu-usuario/alias-game",
      liveLink: "https://alias-game.vercel.app",
      image: flickFinderImage,
      reverse: true,
    },
    {
      title: "Hospital Scheduler API",
      description: "A RESTful API  for managing hospital appointments. The system will find the nearest available appointment date with a doctor of the specified specialization.",
      techStack: ["Node.js", "Express.js", "Docker", "MySQL"],
      repoLink: "https://github.com/tu-usuario/alias-game",
      liveLink: "https://alias-game.vercel.app",
      image: hospitalImage,
      reverse: false,
    },

];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-6 sm:px-12 md:px-20 lg:px-40 xl:px-65 xl:py-25  ">
        <h2 className="text-4xl font-medium mb-20"> <FontAwesomeIcon icon={faCode} className="text-3xl mr-2" ></FontAwesomeIcon>Featured Projects 
        </h2>

         {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
         ))}
        
    </section>
  );
};

export default Projects;
