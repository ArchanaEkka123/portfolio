import React from "react";
import "./services.scss";
const Services = () => {
  return (
    // <div id="root">
    <div class="main ">
      <div class="main_inner p-10">
        <div className="services-heading">
          <h1 class="services-heading-top text-black-900 text-4xl pt-4 font-semibold">
            Services
          </h1>
          <div className="services-line"></div>
        </div>
       
        <div className="services-content-holder">
          <div className="services_card_image_box">
            <img
              className="services_card_image rounded-md"
              src="/images/card_image7.jpg"
              alt="Norway"
              width={400}
              height={400}
            />
          </div>

          <div className="services-card-holder">
            <div className="services-card">
              <img
                className="icon-1"
                src="/images/design-icon1.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="services-card-heading"> Web Design</p>
              <p className="services-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
            <div className="services-card">
              <img
                className="icon-1"
                src="/images/design-icon3.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="services-card-heading"> Mobile App Design</p>
              <p className="services-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
            <div className="services-card">
              <img
                className="icon-1"
                src="/images/design-icon2.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="services-card-heading">UI/UX Design </p>
              <p className="services-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
            <div className="services-card">
              <img
                className="icon-1"
                src="/images/design-icon1.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="services-card-heading"> Brand Identity</p>
              <p className="services-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
