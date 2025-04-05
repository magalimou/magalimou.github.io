import Button from "../ui/Button";  

const Contact = () => { 
    return (
        <section id="contact" className="px-60 py-30 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">Let’s Connect</h2>
            <p className="lg:text-lg md:text-base sm:text-base px-60 mb-5">I'm currently looking for new opportunities as a software developer. Whether you have a project, a job opportunity, or just want to say hi, feel free to reach out!</p>
            <div>
                <Button text="Say Hi" className="btn"></Button>
                

            </div>
        </section>
    );
}

export default Contact;