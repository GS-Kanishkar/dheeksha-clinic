import React from "react";
import "./ClinicBenefits.css";
import doctorImage from "./skin-care.png";

export default function ClinicBenefits() {
  return (
    
    <div className="clinic-benefits-container">
      
      <div className="benefits-card">
        <h2 className="section-title">Why Dheeksha Clinic is the Right Choice for You</h2>
        <p className="clinic-description">
          Dheeksha Clinic is a trusted destination for personalized skin and hair care in Pudukkottai district. As a dedicated dermatology clinic, we focus on providing individualized treatment plans tailored to meet each patient’s unique needs and goals.
        </p>
        <div className="benefits-list">
          <div className="benefit-item">
            <img src={doctorImage} alt="Expert Care" className="benefit-image" />
            <h4>Expert Care</h4>
            <p>Our dermatologist provides professional, results-oriented care for a wide range of skin and hair concerns.</p>
          </div>
          <div className="benefit-item">
            <img src={doctorImage} alt="Personalized Treatments" className="benefit-image" />
            <h4>Personalized Treatments</h4>
            <p>Every patient receives personalized attention with tailored treatment plans.</p>
          </div>
          <div className="benefit-item">
            <img src={doctorImage} alt="Advanced Technology" className="benefit-image" />
            <h4>Advanced Techniques and Technology</h4>
            <p>We utilize the latest advancements in dermatology for optimal results.</p>
          </div>
          <div className="benefit-item">
            <img src={doctorImage} alt="Trusted Service" className="benefit-image" />
            <h4>Trusted and Compassionate Service</h4>
            <p>Our commitment to patient comfort and satisfaction has made us a preferred choice.</p>
          </div>
          <div className="benefit-item">
            <img src={doctorImage} alt="Comprehensive Services" className="benefit-image" />
            <h4>Comprehensive Services</h4>
            <p>We offer a wide range of services including acne treatments, dermatosurgery, laser treatments, and more.</p>
          </div>
          <div className="benefit-item">
            <img src={doctorImage} alt="Prevention" className="benefit-image" />
            <h4>Prevention and Guidance</h4>
            <p>We emphasize prevention by offering expert advice on skincare practices and lifestyle changes to maintain healthy skin, hair, and nails.</p>
          </div>
        </div>
        <p className="clinic-footer">
          Experience the difference that individualized care can make. Book your appointment at Dheeksha Clinic today and take the first step toward achieving healthier, beautiful skin and hair!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=919080024196&text=Hi, I would like to book an appointment with Dheeksha Clinic!"
          target="_blank"
          className="btn btn-warning"
        >
          Book Now!
        </a>
      </div>
    
    </div>
  );
}
