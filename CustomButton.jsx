import React from "react";
import "./button.css";


export default function CustomButton({value, color1, pad_weight, pad_height, color2}) {
    const buttonStyles = {
        backgroundColor: color1 || "#DAA520",
        padding: `${pad_height || 10}px ${pad_weight || 20}px`,
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = color2 || "#C0A420";
    };
    
    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = color1 || "#DAA520";
    };

    return (
        <button class="customButton" 
            style={buttonStyles} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >{value}</button>
    );
};