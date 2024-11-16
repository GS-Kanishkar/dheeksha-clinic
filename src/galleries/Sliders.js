import React, { useRef, useState, useEffect } from "react";
import "./Sliders.css";

const Sliders = ({ beforeImage, afterImage, description }) => {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState("50%");

  const handleMouseMove = (event) => {
    const { left, width } = sliderRef.current.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const newSliderPosition = Math.max(0, Math.min(mouseX / width, 1)) * 100;
    setSliderPosition(`${newSliderPosition}%`);
  };

  useEffect(() => {
    // Reset slider position on refresh
    setSliderPosition("50%");
  }, []);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="image-wrapper">
        <img className="gallery-image before" src={beforeImage} alt="Before treatment" style={{ width: `${sliderPosition}` }} />
        <img className="gallery-image after" src={afterImage} alt="After treatment" style={{ width: `100%`, clipPath: `inset(0 ${100 - parseFloat(sliderPosition)}% 0 0)` }} />
        <div className="slider" style={{ left: sliderPosition }} />
      </div>
      <div className="description">{description}</div>
      <div className="slider-overlay" onMouseMove={handleMouseMove} onMouseLeave={() => setSliderPosition("50%")} />
    </div>
  );
};

export default Sliders;
