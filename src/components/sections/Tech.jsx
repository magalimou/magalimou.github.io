import { motion } from "framer-motion";

import TechCard from "../ui/TechCard";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const technologies = [
    {
        title: "Backend",
        stack: ["Node.js", "Express", "MongoDB", "Java", "MySQL", "JavaScript"],
        icon: faGear
    },
    {
        title: "Frontend",
        stack: ["React", "Tailwind CSS", "HTML", "CSS", "Angular"],
        icon: faPalette
    },
    {
        title: "Tools",
        stack: ["Docker", "Github", "Git", "Figma", "Jira", "Postman"],
        icon: faScrewdriverWrench
    }
]

const Tech = () => {
        return (
            <motion.section
              id="stack"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative px-6 py-20 lg:py-42 sm:px-12 md:px-20 lg:px-40 xl:px-70"
            >
              <div className="container mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10"
                >
                  Tools & Technologies I Use
                </motion.h2>
        
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <TechCard title={tech.title} stack={tech.stack} icon={tech.icon} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
        
              <div className="top-3/6 left-16/20 w-[350px] h-[250px] lg:w-[400px] lg:h-[370px] circle-background"></div>
            </motion.section>
         );
}

export default Tech;