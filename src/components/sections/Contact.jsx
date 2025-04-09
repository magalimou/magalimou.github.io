import Button from "../ui/Button";  
import EmailWithCopy from "../ui/EmailWithCopy";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const Contact = () => { 
    return (
        <section id="contact" className=" scroll-mt-24 px-6 py-20 sm:px-12 md:px-20 lg:px-40 xl:px-60 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-5">Let’s Connect</h2>
            <p className="lg:text-lg md:text-base sm:text-base px-6 sm:px-12 lg:px-25 mb-6">I'm currently looking for new opportunities as a software developer. Whether you have a project, a job opportunity, or just want to say hi, feel free to reach out!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a href="mailto:maguimourino@gmail.com">
                <Button text="Say Hi" className="btn" />
            </a>
            <EmailWithCopy icon={faCopy}></EmailWithCopy>
            </div>
        </section>
    );
}

export default Contact;