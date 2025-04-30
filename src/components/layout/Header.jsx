import React from "react";
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--background-color-dark)] border-b border-[#392E39] px-6 sm:px-12 md:px-20 lg:px-40 xl:px-70 py-4">
      <div className="flex justify-between items-center">

        {/*Mobile menu */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/*Deskop Menu */}
        <nav className="hidden sm:block w-full">
          <ul className="flex justify-center items-center list-none">
            {['projects', 'stack', 'about', 'contact'].map((id, index) => (
              <li key={id} className="mr-12">
                <a
                  href={`#${id}`}
                  className="text-[var(--text-color-dark)] text-base px-4 py-1.5 rounded-[10px] hover:bg-[#2f1b3a] transition"
                >
                  {id === 'stack' ? 'Stack' : id === 'about' ? 'About me' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/*Mobile menu (only if isOpen it's true) */}
      {isOpen && (
        <nav className="sm:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            {['projects', 'tech', 'about', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-color-dark)] text-base px-4 py-1.5 rounded-[10px] hover:bg-[#2f1b3a] transition"
                >
                  {id === 'tech' ? 'Tech' : id === 'about' ? 'About me' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;