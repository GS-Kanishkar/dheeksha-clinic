import "./footer.css";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import logo from "../NavBar/logo.png";

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Top Section with Logo and Address */}
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-tagline">
              Empowering health with care and innovation.
            </p>
          </div>
          <div className="footer-address">
            <p>273, Periyar Nagar, Pudukkottai, Kavinad West, Tamil Nadu 622001</p>
            <p>
              <a href="tel:+918489520520" className="footer-contact">
                +91 084895 20520
              </a>{" "}
              |{" "}
              <a href="tel:04312706519" className="footer-contact">
                0431 2706519
              </a>
            </p>
            <a
              href="https://www.google.com/maps/place/Jayam+Color+Lab+%26+Studio,+Trichy/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Social Media Section */}
        <div className="footer-social">
          <p>Connect with us</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/jayamcolorlab"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.youtube.com/jayamcolorlab"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.instagram.com/jayamcolorlab"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <BsInstagram />
            </a>
            <a
              href="mailto:dheekshaclinic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiGmail />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dheeksha Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
