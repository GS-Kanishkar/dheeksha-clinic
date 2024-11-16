import React, { useRef, useState } from "react";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = ({ beforeImage, afterImage, description }) => {
    const containerRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50); // Initial position in percentage

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;

        if (offsetX < 0 || offsetX > rect.width) return; // Prevent going out of bounds

        const percentage = (offsetX / rect.width) * 100;
        setSliderPosition(percentage); // Update position based on mouse
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const offsetX = touch.clientX - rect.left;

        if (offsetX < 0 || offsetX > rect.width) return; // Prevent going out of bounds

        const percentage = (offsetX / rect.width) * 100;
        setSliderPosition(percentage); // Update position based on touch
    };

    return (
        <div
            className="before-after-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove} // Add touch support
        >
            <img
                className="before-image"
                src={beforeImage}
                alt="Before"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            />
            <img
                className="after-image"
                src={afterImage}
                alt="After"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            />
            <div
                className="slider"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                    e.preventDefault();
                    const onMouseMove = (e) => handleMouseMove(e);
                    const onMouseUp = () => {
                        window.removeEventListener("mousemove", onMouseMove);
                        window.removeEventListener("mouseup", onMouseUp);
                    };
                    window.addEventListener("mousemove", onMouseMove);
                    window.addEventListener("mouseup", onMouseUp);
                }}
            />
            {/* Description below the slider */}
            <div className="description">{description}</div>
        </div>
    );
};

export default BeforeAfterSlider;
