import Button from "../ui/Button";  
import EmailWithCopy from "../ui/EmailWithCopy";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const Contact = () => { 
    return (
        <section id="contact" className="relative scroll-mt-24 px-6 py-30 sm:px-12 md:px-20 lg:px-40 xl:px-70   lg:py-45 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-5">Let’s Connect</h2>
            <p className="lg:text-lg md:text-base sm:text-base px-10 sm:px-12 lg:px-25 mb-6">I'm currently looking for new opportunities as a software developer. Whether you have a project, a job opportunity, or just want to say hi, feel free to reach out!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a href="mailto:maguimourino@gmail.com">
                <Button text="Say Hi" className="btn" />
            </a>
            <EmailWithCopy icon={faCopy}></EmailWithCopy>
            </div>
            <div className=" top-2/3 left-19/20 w-[300px] h-[250px] lg:w-[400px] lg:h-[370px]  circle-background"></div>
            <div className="top-1/3 left-1/55 w-[250px] h-[200px] lg:w-[400px] lg:h-[370px]  circle-background-purple"></div>
        </section>
    );
}

export default Contact;