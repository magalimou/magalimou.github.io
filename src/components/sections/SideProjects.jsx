import { motion } from "framer-motion";

import SideProjectCard from "../ui/SideProjectCard";

const sideProjects = [
    {
        title: "PokeMarket",
        description: "A marketplace for buying, selling, and trading Pokémon cards. Integrates an external Pokémon card API to fetch real-time card data. Focused on clean code, modularity, and maintainability.",
        techStack: ["Java", "OOP", "JSON File"],
        repoLink: "https://github.com/MateoCunsolo/pokemarket",
        },
    {
        title: "Taskit",
        description: "A task management app designed to help users stay organized and track their daily tasks. Features task creation, editing, and completion tracking. Built with a React frontend and a Node.js Express backend.",
        techStack: ["Node.js", "Mysql", "React", "Javascript"],
        liveLink: "https://taskit-frontend-three.vercel.app/",
    },
    {
        title: "World Cup fixture",
        description: "Fixture for the FIFA World Cup and results simulator. Simulates match outcomes based on predefined probabilities for each team, calculating results based on each country's probability data.",
        techStack: ["C", "Pointers", "Structs"],
        repoLink: "https://github.com/magalimou/TP-FINAL-LAB-II",
    },
    {
        title: "Home Hive",
        description: "A web platform for browsing and managing real estate properties. Features real-time weather integration, displaying weather conditions for each property location.",
        techStack: ["HTML", "CSS", "JavaScript", "Figma"],
        repoLink: "https://github.com/magalimou/Real-Estate-Project",
        liveLink:"https://magalimou.github.io/Real-Estate-Project/"
    },
   
];

const SideProjects = () => {

    return (
        <section className="relative px-6 py-20 lg:py-10 sm:px-12 md:px-20 lg:px-40 xl:px-70 pb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10">Additional Projects I’ve Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {sideProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <SideProjectCard {...project} />
                </motion.div>
            ))}
        </div>
        <div className="circle-background-purple top-5/10 left-5/10 w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"></div>
        </section>
    );
}

export default SideProjects;