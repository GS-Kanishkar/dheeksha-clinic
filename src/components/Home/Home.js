import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../Carousel/Slider";
import Services from "../Services/Services";
import FadeInSection from "../../FadeInSection";
import ClinicBenefits from "../ClinicBenefits/ClinicBenefits";
import Galleries from "../../galleries/Galleries";
import DoctorProfile from "../DoctorProfile/DoctorProfile";  
import { Element } from "react-scroll";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <Slider />
      <div style={{ height: "45.8vh" }}></div>
      <Element name="services" >
      <FadeInSection>
        <Services home={"false"} />
      </FadeInSection> 
      </Element>

      <Element name="doctorprofile" >
      <FadeInSection>
        <DoctorProfile />
      </FadeInSection>
      </Element>

      <Element name="Galleries" >
        <FadeInSection>
          <Galleries />
        </FadeInSection>
        </Element>

      <Element name="ClinicBenefits" >
      
        <FadeInSection>
          <ClinicBenefits />
        </FadeInSection>
      </Element>

   
     
    </React.Fragment>
  );
}
