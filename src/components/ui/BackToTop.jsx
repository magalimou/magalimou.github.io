import { useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className=" cursor-pointer fixed bottom-6 right-6 z-50 p-4 rounded-full bg-(--background-color-dark) text-[var(--secondary-purple-color)] font-semibold  border-2 border-(--secondary-purple-color) text-xl shadow-lg hover:shadow-[0_0_8px_2px_rgba(178,168,253,0.25)] transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
