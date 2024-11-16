import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../Carousel/Slider";
import Services from "../Services/Services";
import FadeInSection from "../../FadeInSection";
import ClinicBenefits from "../ClinicBenefits/ClinicBenefits";
import Galleries from "../../galleries/Galleries";
import DoctorProfile from "../DoctorProfile/DoctorProfile";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <Slider />
      <div style={{ height: "91.8vh" }}></div>
      <FadeInSection>
        <Services home={"false"} />
      </FadeInSection>

      <FadeInSection>
        <DoctorProfile />
      </FadeInSection>

      <div className="homeImg">
        <FadeInSection>
          <ClinicBenefits />
        </FadeInSection>
      </div>

      <div className="homeImg"> 
        <FadeInSection>
          <Galleries />
        </FadeInSection>
      </div>
    </React.Fragment>
  );
}
