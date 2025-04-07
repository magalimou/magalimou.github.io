import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmailWithCopy = ({icon}) => {
  const [copied, setCopied] = useState(false);
  const email = "maguimourino@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="relative flex items-center gap-2 border-2 border-[var(--primary-purple-color)] rounded-full py-2 px-3">
      <span className="text-sm sm:text-base">{email}</span>
      <button onClick={handleCopy} title="Copy email">
        <FontAwesomeIcon icon={icon} className="text-white hover:text-[var(--primary-purple-color)] transition duration-300" />
      </button>
      {copied && <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-700 text-white text-sm px-2 py-1 rounded-md shadow-md animate-fade-in">Copied!</span>}
    </div>
  );
};

export default EmailWithCopy;
