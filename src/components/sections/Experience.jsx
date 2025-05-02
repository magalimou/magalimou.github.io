import { motion } from 'framer-motion';

import { useState } from 'react';
import { experiences } from '../data/experienceData';

const Experience = () => {
  const [selectedId, setSelectedId] = useState('solvd');
  const selected = experiences.find((exp) => exp.id === selectedId);

  return (
    <motion.section
      id="experience"
      className="relative px-6 py-20 lg:py-30 sm:px-12 md:px-20 lg:px-40 xl:px-70 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              className={`text-left hover:border-2 rounded-md p-4 hover:bg-[#100914] hover:border-[#A597F6] transition ${
                selectedId === exp.id ? 'bg-[#1C1222]' : 'border-2 border-[#33223E]'
              }`}
            >
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-base text-gray-400">{exp.company}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Right content */}
        <motion.div
          className="md:col-span-2 bg-[#1C1222] p-6 rounded-md"
          key={selectedId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold">{selected.role}</h3>
          <p className="text-lg text-gray-400">
            {selected.company} {selected.period && `| ${selected.period}`}
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-base">
            {selected.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="top-3/7 right-1/70 blur-3xl w-[70px] h-[70px] lg:w-[300px] lg:h-[300px] circle-background-orange"></div>
    </motion.section>
  );
};

export default Experience;
