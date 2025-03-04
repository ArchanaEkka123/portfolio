import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about_cardmain p-8">
      <div className="about_heading">
        <h1 className="about_heading_top text-black-900 text-4xl pt-4 font-semibold">About Me</h1>
        <div className="line"></div>
        <p className="sub_heading">
          A frontend developer specializes in building the user-facing part of
          websites or applications.
        </p>
      </div>

      <div className="about_card p-4 ">
        <div className="about_card_image_box">
          <img
            className="about_card_image mb-4 hover:animate-spin"
            src="/images/card_image7.jpg"
            alt="Norway"
            width={400}
            height={400}
          />
        </div>

        <div className="content">
          <p className="heading-content animate-slideIn text-indigo-800 text-2xl ">
            Developing the User Interface (UI): Creating the layout, navigation,
            buttons, forms, and all interactive elements that users interact
            with.
          </p>
          <div className="card-holder">
            <div className="card">
              <img
                className="icon-1"
                src="/images/design-icon1.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="about-card-heading"> Product Design</p>
              <p className="about-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
            <div className="card">
              <img
                className="icon-1"
                src="/images/design-icon2.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="about-card-heading"> UI/UX Design</p>
              <p className="about-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
            <div className="card">
              <img
                className="icon-1"
                src="/images/design-icon3.png"
                alt="Description of the image"
                width={40}
                height={40}
              />
              <p className="about-card-heading">Interactive Design </p>
              <p className="about-card-description">
                {" "}
                Developing the User Interface (UI):
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
