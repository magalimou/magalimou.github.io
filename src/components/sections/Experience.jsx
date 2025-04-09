import { useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

    const [activeTab, setActiveTab] = useState("work");

    const workData = [
        {
        title: "Title",
        company: "Tech Company",
        description: "Description.",
        date: "January 2022 - Present",
        },
        {
        title: "Title",
        company: "Another Tech Company",
        description: "Description.",
        date: "June 2021 - December 2021",
        },
    ];

    const educationData = [
        {
          title: "Systems Engineering",
          company: "UNICEN",
          description: "",
          date: "February 2025 - Present",
        },
        {
          title: "Tecnicatura Universitaria en Programación",
          company: "UTN",
          description: "",
          date: "February 2022 - December 2023",
        },
    ];

    const dataToShow = activeTab === "work" ? workData : educationData;

    return (
        <section
          id="experience"
          className="scroll-mt-24 py-16 px-6 sm:px-12 md:px-20 lg:px-50 xl:px-70"
        >
          <div className="container mx-auto">
            <div className="flex gap-4 mb-15 justify-around items-center">
              <button
                className={`cursor-pointer px-4 py-2 rounded-full transition text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium ${
                  activeTab === "work"
                    ? "border-purple-500 text-purple-400"
                    : "border-purple-500 text-white"
                }`}
                onClick={() => setActiveTab("work")}
              >
                Work
              </button>
              <button
                className={` cursor-pointer px-4 py-2 rounded-full transition text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium ${
                  activeTab === "education"
                    ? "border-purple-500 text-purple-400"
                    : "border-[var(--primary-purple-color)] text-white"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>
    
            <div className="w-full flex justify-center">
  <div className="w-full max-w-4xl px-4">
    {dataToShow.map((item, index) => (
      <ExperienceCard
        key={index}
        title={item.title}
        company={item.company}
        description={item.description}
        date={item.date}
      />
    ))}
  </div>
</div>

          </div>
        </section>
    );
}

export default Experience;