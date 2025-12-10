// ...existing code...
import React from "react";
import { ButtonProps } from "../../interfaces";

const Button : React.FC<ButtonProps> = ({ title, onClick, type = "button"}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            <span className="text-sm">{title}</span>
        </button>
    );
}

export default Button;
// ...existing code...