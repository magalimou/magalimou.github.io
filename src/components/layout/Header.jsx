import React from "react";


const Header = () => {
    return (
        <header className="flex justify-between items-center px-[50px] py-[20px] w-full top-0 left-0 bg-[var(--background-color-dark)] border-b border-[#392E39]">
        <nav className="w-full">
          <ul className="flex justify-end items-center list-none">
            <li className="mr-12">
              <a
                href="#"
                className="text-[var(--text-color-dark)] text-base px-4 py-1.5 rounded-[10px] hover:bg-[#2f1b3a] transition"
              >
                Link
              </a>
            </li>
            <li className="mr-12">
              <a
                href="#"
                className="text-[var(--text-color-dark)] text-base px-4 py-1.5 rounded-[10px] hover:bg-[#2f1b3a] transition"
              >
                Link
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
    );
}

export default Header;