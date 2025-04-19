import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[var(--background-color-dark)] border-1 border-[var(--background-color-dark)] border-t-gray-500/60 text-white py-7 px-6 sm:px-12 md:px-30 lg:px-40 xl:px-25 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base">Designed & built by <a href="">Magali Mouriño</a>.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/magalimou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Github profile"
            className="hover:text-[var(--secondary-purple-color)] transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/magali-mouriño"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Linkedin profile"
            className="hover:text-[var(--secondary-purple-color)] transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
