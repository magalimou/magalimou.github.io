import Pandora from '../../assets/Pandora.png';


const AboutMe = () => {
    return (
        <section id='about' className="scroll-mt-24 px-6 py-20 sm:px-12 md:px-20 lg:px-40 xl:px-70 flex flex-col items-start ">
        <div className='mb-3 '>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-3">About Me</h2>
            <p className="mb-3 lg:text-lg md:text-base sm:text-base">I'm a software developer with experience in Node.js. I studied a Technical Degree in Programming at UTN Mar del Plata and I'm currently pursuing a degree in Systems Engineering at UNICEN.</p>
            <p className="mb-3 lg:text-lg md:text-base sm:text-base">I stand out for creating positive team dynamics, fostering collaboration and knowledge sharing, which has been key to the success and progress of the projects I’ve worked on.
            </p>
            <p className="mb-3 lg:text-lg md:text-base sm:text-base">
            I’m never working alone —my cat, Pandora, insists on supervising my projects (mostly by sleeping on my keyboard).
            </p>
        </div>
        <div className='items-end justify-end flex'>
            <img className='w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-30 object-cover rounded-full shadow-lg  transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl' 
            src={Pandora} 
            alt="This is a close-up image of a cat's face, specifically the head, set against a circular, gradient background. The cat appears to be a tabby, with a pattern of dark stripes or swirls on its light-colored fur. Its eyes are large and yellow, and it has a small, pink nose. The cat's ears are perked up, indicating alertness. The background is a gradient of gray, fading to a reddish-orange hue in the center, directly behind the cat's head. The image is cropped to show only the cat's face and the immediate surrounding area, emphasizing its features." />
        </div>
        <div className='circle-background-purple top-[520%] left-[90%] w-[20vw] h-[20vw]'></div>
        <div className='circle-background-orange top-[550%] left-[80%] w-[10vw] h-[10vw]'></div>

        </section>
    );
}

export default AboutMe;