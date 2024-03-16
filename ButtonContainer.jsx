import React from "react";
import "./bcontainer.css";

export default function ButtonContainer({children, top, bottom, left, right}) {
    const containerStyles = {
        top: top || "10px",
        bottom: bottom || "10px",
        left: left || "10px",
        right: right || "10px",
    };
    return (
        <div class="buttonContainer" style={containerStyles}>{children}</div>
    )
};