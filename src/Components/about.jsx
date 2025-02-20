import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about_cardmain p-8">
      <div className="about_heading">
        <h1 className="text-black-900 text-4xl p-4 font-semibold">About Me</h1>
        <p className="sub_heading">
          A frontend developer specializes in building the user-facing part of
          websites or applications.
        </p>
      </div>

      <div className="about_card p-4 ">
        <img
          className="about_card_image hover:animate-spin"
          src="/images/card_image7.jpg"
          alt="Norway"
          width={500}
          height={500}
        />
        <div className="content">
          <p className="animate-slideIn text-indigo-800 text-2xl ">
            Developing the User Interface (UI): Creating the layout, navigation,
            buttons, forms, and all interactive elements that users interact
            with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
