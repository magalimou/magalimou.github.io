import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ text, icon, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {text}
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
    </button>
  );
};

export default Button;