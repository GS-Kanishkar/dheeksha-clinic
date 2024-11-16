import React from "react";
import "./services.css";

import skin1 from "../../images/skin-care.jpg"
import gfcimg from "../../images/gfc-img.jpg"
import skin2 from "../../images/laser-img.jpg"
import skin4 from "../../images/dotor-patient.jpg"



export default class Services extends React.Component {
  render() {
    return (
      <>
        <React.Fragment>
          <div className="container contain ">
            {" "} 
            <div style={{ textAlign: "center" }}>
              <h4 className="section-title">Our Services !</h4>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox" >
                  <img
                      src={skin1}
                      alt="Camera Service GIF"
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: "cover" // optional: adjust as needed for image sizing
                      }}
                    />
                  
                    <h6 className="underlinetext">SKIN CARE</h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4 ">
                      Our skin care treatments are designed to enhance and maintain the natural beauty of your skin, providing solutions for a range of skin concerns. Whether you're looking to treat acne, reduce fine lines, or brighten your complexion, our dermatology experts use the latest techniques to deliver safe, effective results.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className=" card homeBox bord">
                  <img
                      src={gfcimg}
                      alt="Camera Service GIF"
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: "cover" // optional: adjust as needed for image sizing
                      }}
                    />
                
                    <h6 className="underlinetext">
                    HAIR CARE
                    </h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                      Growth Factor Concentrate (GFC) is a revolutionary treatment designed to boost skin health and promote hair regrowth using the body's natural healing components. This innovative therapy involves isolating growth factors from your own blood, which are then concentrated and reintroduced into targeted areas of the skin or scalp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                  <img
                      src={skin2}
                      alt="Camera Service GIF"
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: "cover" // optional: adjust as needed for image sizing
                      }}
                    />

                    <h6 className="underlinetext"> Laser Treatments  </h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                      At Dheeksha Clinic, we offer advanced laser treatments for smoother, clearer, and rejuvenated skin. From acne scar reduction to pigmentation correction and hair removal, our lasers provide safe, effective solutions. Tailored to your skin type, our treatments deliver long-lasting results with minimal downtime. Experience the benefits of precision and care with our expert laser services. Book your appointment today for glowing skin!
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                  <img
                      src={skin4}
                      alt="Camera Service GIF"
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: "cover" // optional: adjust as needed for image sizing
                      }}
                    />
                

                    <h6 className="underlinetext"> Body Treatments </h6>

                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                      At Dheeksha Clinic, we offer a range of skincare treatments to address various concerns like acne, pigmentation, and aging. Our treatments are designed to improve skin texture, reduce blemishes, and restore a youthful glow. Using advanced methods, we provide safe and effective solutions tailored to your skin’s unique needs. Whether it’s deep hydration or anti-aging, our personalized care ensures visible, lasting results. Book your appointment today for healthier, radiant skin!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}
