// ...existing code...
import React from "react";
import { CardProps } from "../../interfaces";

const Card : React.FC<CardProps> = ({ title, description, image}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden bg-white shadow-md dark:bg-slate-800">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
}

export default Card;
// ...existing code...