import React, { useRef } from "react";
import "./Galleries.css";

import image1 from "../images/gfc.jpg";
import image2 from "../images/face-img.jpg";
import image3 from "../images/eye-img.jpg";
import image4 from "../images/gallery4.jpg";

const imageData = [
  { src: image1, alt: "GFC Treatment", description: "GFC Treatment" },
  { src: image2, alt: "Laser Treatment", description: "PRP Treatment" },
  { src: image3, alt: "scar Treatment", description: "Laser Treatment" },
  { src: image4, alt: "scar Treatment", description: "GFC Treatment" },
  { src: image1, alt: "GFC Treatment", description: "GFC Treatment" },
  { src: image2, alt: "Laser Treatment", description: "PRP Treatment" },
  { src: image3, alt: "scar Treatment", description: "Laser Treatment" },
  { src: image4, alt: "scar Treatment", description: "GFC Treatment" },
];

export default function Galleries() {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Our Clinic Gallery</h2>
      <p className="gallery-description">
        A glimpse into our clinic and treatments. Browse through to see our
        services and the results we've achieved for our patients.
      </p>

      <div className="gallery-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ‹
        </button>
        <div className="gallery-row" ref={galleryRef}>
          {imageData.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <p className="image-label">{image.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
}
