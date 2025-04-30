import { motion } from "framer-motion";
import { useState } from 'react';

import Pandora from '../../assets/Pandora.webp';


const AboutMe = () => {

    const [showMeow, setShowMeow] = useState(false);

    const handleClick = () => {
        const audio = new Audio('/sounds/meow.mp3');
        audio.play();
        setShowMeow(true);
        setTimeout(() => setShowMeow(false), 2000);
    };

    return (
        <section id='about' className="relative scroll-mt-24 px-6 py-25 lg:py-30 sm:px-12 md:px-20 lg:px-40 xl:px-70 flex flex-col items-start ">
        <motion.div
                className='mb-3'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-6">About Me</h2>
                <p className="mb-3 lg:text-lg md:text-base sm:text-base">
                    I'm a software developer with experience in Node.js. I studied a Technical Degree in Programming at UTN Mar del Plata and I'm currently pursuing a degree in Systems Engineering at UNICEN.
                </p>
                <p className="mb-3 lg:text-lg md:text-base sm:text-base">
                My academic background and personal experience have allowed me to develop a creative approach that I apply to all my projects. I stand out for creating positive and collaborative team dynamics.
                </p>
                <p className="mb-3 lg:text-lg md:text-base sm:text-base">
                    I’m never working alone —my cat, Pandora 😺, insists on supervising my projects (mostly by sleeping on my keyboard).
                </p>
            </motion.div>

            <motion.div
                className='relative items-end justify-end flex cursor-pointer'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={handleClick}
            >
                <img
                    className='w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-30 object-cover rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl'
                    src={Pandora}
                    alt="This is a close-up image of a cat's face, with a focus on its eyes and nose. The cat has a fluffy coat and a curious expression, as if it's looking directly at the camera. The background is blurred, drawing attention to the cat's features."
                    
                />

                {showMeow && (
                <div className="absolute top-[50%] left-[130%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative bg-white border border-gray-300 text-[var(--background-color-dark)] px-3 py-1 rounded-lg shadow-lg text-sm font-semibold">
                    meow!
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
                    </div>
                </div>
                )}
            </motion.div>
        <div className="top-5/8 right-1/70 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px]  circle-background-orange"></div>


        </section>
    );
}

export default AboutMe;