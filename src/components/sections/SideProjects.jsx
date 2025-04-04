import SideProjectCard from "../ui/SideProjectCard";

const sideProjects = [
    {
    title: "PokeMarket",
    description: "A marketplace for buying, selling, and trading Pokémon cards. Integrates an external Pokémon card API to fetch real-time card data. Focused on clean code, modularity, and maintainability.",
    techStack: ["Java", "OOP", "JSON File"],
    link: "#",
    },
    {
        title: "Taskit",
        description: "A task management app designed to help users stay organized and track their daily tasks. Features task creation, editing, and completion tracking. Built with a React frontend and a Node.js Express backend.",
        techStack: ["Node.js", "Mysql", "React", "Javascript"],
        link: "#",
    },
    {
    title: "World Cup fixture",
    description: "Fixture for the FIFA World Cup and results simulator. Simulates match outcomes based on predefined probabilities for each team, calculating results based on each country's probability data.",
    techStack: ["C", "Pointers", "Structs"],
    link: "#",
    },
    {
    title: "Home Hive",
    description: "A web platform for browsing and managing real estate properties. Features real-time weather integration, displaying weather conditions for each property location.",
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "#",
    },
   
];

const SideProjects = () => {

    return (
        <section className="px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 pb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-6 sm:mb-8 md:mb-10">Other projects I’ve worked on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sideProjects.map((project, index) => (
                <SideProjectCard key={index} {...project} />
            ))}
        </div>
        </section>
    );
}

export default SideProjects;