import React from "react";
import "./services.css";

import skin1 from "../checking/giphy.webp"

export default class Services extends React.Component {
  render() {
    return (
      <>
        <React.Fragment>
          <div className="container contain ">
            {" "}
            <h4 className="welcometext">Our Services !</h4>
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
                      src={skin1}
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
                      src={skin1}
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
                        There is no limit to the effects that can be brought
                        about in a simple photograph. You can make any event
                        look and feel more vibrant, fun and appealing with photo
                        editing. We edit those captures beautifully, and present
                        you the final Album which will be with you forever.{" "}
                        <br />
                        <br /> Also, we fix the damaged old photos and bring
                        color to b/w photographs, flex editing, collage, VHS to DVD/Pendrive and
                        etc., at affordable cost in our studio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                  <img
                      src={skin1}
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
                        Framing some important memories in wall makes that
                        moment more memorable. We have a wide variety of gift
                        items that you can choose as a present for your loved
                        ones at affordable price.
                        <br />
                        <br />
                        Our services are extended all around the India and just
                        Whatsapp or email us, we will deliver the frame and gift
                        items at your doorstep.
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
