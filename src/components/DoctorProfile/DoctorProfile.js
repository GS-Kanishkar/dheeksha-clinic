// DoctorProfile.jsx
import React from "react";
import "./DoctorProfile.css";
import doctorImage from "./DoctorImage.jpg"; // Replace with the actual image path of Dr. Karunya

export default class DoctorProfile extends React.Component {
  render() {
    return (
      <div className="container single-profile-container">
        <div className="profile-card">
          <img
            src={doctorImage}
            alt="Doctor Profile"
            className="profile-img"
          />
          <h4 className="doctor-name">Dr. Karunya Narayanasamy</h4>
          <h6 className="doctor-specialization">Dermatologist & Chief Consultant</h6>
          <div className="doctor-description">
            <p>
              Dr. Karunya Narayanasamy is a renowned dermatologist specializing in the treatment of skin, hair, and nail conditions. With over 4 years of experience in the field, she serves as an Assistant Professor in the DVL department at Government Pudukkottai Medical College and as the Chief Consultant at Dheeksha Skin Centre.
            </p>
            <p>
              Dr. Karunya is highly skilled in dermatosurgery, cosmetology, and laser treatments. She is known for providing personalized care, using state-of-the-art technology and advanced techniques to treat a variety of dermatologic conditions. Whether it's acne, eczema, psoriasis, hair loss, or other skin concerns, Dr. Karunya offers comprehensive care tailored to your needs.
            </p>
            <p>
              At Dheeksha Skin Centre, we are committed to delivering the best dermatologic care with the latest treatments and expert knowledge, focusing on long-lasting results and preventive measures. If you're looking to improve the health and appearance of your skin, hair, or nails, Dr. Karunya Narayanasamy is here to help.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
