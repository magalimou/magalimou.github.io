import Pandora from '../../assets/Pandora.png';

const AboutMe = () => {
    return (
        <section className="px-6 py-15 sm:px-12 md:px-20 lg:px-40 xl:px-60 flex justify-start border-2 border-red-500">
        <div className='circle-background-orange top-[490%] left-[10%] w-[10vw] h-[10vw]'></div>

        <div className='border-2 border-red-500 max-w-3xl '>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-3">About Me</h2>
            <p className="mb-3">I'm a software developer with experience in Node.js. I studied a Technical Degree in Programming at UTN Mar del Plata and I'm currently pursuing a degree in Systems Engineering at UNICEN.</p>
            <p className="mb-3">I stand out for creating positive team dynamics, fostering collaboration and knowledge sharing, which has been key to the success and progress of the projects I’ve worked on.
            </p>
            <p className="mb-3">
            I’m never working alone —my cat, Pandora, insists on supervising my projects (mostly by sleeping on my keyboard).
            </p>
        </div>
        <div className='items-end justify-end flex'>
            <img src={Pandora} alt="" />
        </div>
        <div className='circle-background-purple top-[520%] left-[90%] w-[20vw] h-[20vw]'></div>
        </section>
    );
}

export default AboutMe;