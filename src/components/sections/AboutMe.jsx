import { motion } from "framer-motion";

import Pandora from '../../assets/Pandora.png';


const AboutMe = () => {
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
                    I stand out for creating positive team dynamics, fostering collaboration and knowledge sharing, which has been key to the success and progress of the projects I’ve worked on.
                </p>
                <p className="mb-3 lg:text-lg md:text-base sm:text-base">
                    I’m never working alone —my cat, Pandora, insists on supervising my projects (mostly by sleeping on my keyboard).
                </p>
            </motion.div>

            <motion.div
                className='items-end justify-end flex cursor-pointer'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <img
                    className='w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-30 object-cover rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl'
                    src={Pandora}
                    alt="This is a close-up image of a cat's face..."
                    onClick={() => {
                        const audio = new Audio('/sounds/meow.mp3');
                        audio.play();
                    }}
                />
            </motion.div>
        <div className="top-1/8 right-1/70 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px]  circle-background-orange"></div>


        </section>
    );
}

export default AboutMe;