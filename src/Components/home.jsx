import React from "react";
import "./home.scss";
import About from "./about";
import Contact from "./contact";

const Home = () => {
  return (
    <div className="main_outter">
      <div className="main">
        <div className="home_sec01">
          <div className="sec_con">
            <div className="right_sec">
              <div>
                <p className="content">Fontend Developer</p>
                <p className="name hover:animate-bounce hover:text-color-red text-blue-800">
                  Archana Ekka
                </p>
                <p className="content">
                  I'm a frontend developer and work in Raipur Chhattishgarh
                </p>
              </div>
            </div>
            <div className="left_sec">
              <img
                className="myimage hover:animate-pulse"
                src="/images/myImage.jpg"
                alt="Description of the image"
              />
            </div>
          </div>
        </div>

        <About/>
        <div className="cardmain pb-10">
          <h1 className="text-black-900 text-4xl p-4 font-semibold">
            Technical Skills
          </h1>

          <div className="Skills_card">
            <div className="card">
              <div className="content">
                <p className="content_heading">
                  <b>HTML</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 "
                src="/images/card_image1.jpg"
                alt="Description of the image"
              />
            </div>
            <div className="card">
              <div className="content">
                <p className="content_heading ">
                  <b>React</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-auto"
                src="/images/card_image8.jpg"
                alt="Norway"
              />
            </div>
            <div className="card">
              <div className="content">
                <p className="content_heading">
                  <b>CSS</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-auto"
                src="/images/card_image5.jpg"
                alt="Norway"
              />
            </div>
            <div className="card">
              <div className="content">
                <p className="content_heading">
                  <b>Tailwind</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-auto"
                src="/images/card_image3.jpg"
                alt="Description of the image"
              />
            </div>
            <div className="card">
              <div className="content">
                <p className="content_heading">
                  <b>Node.js</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-auto"
                src="/images/card_image11.jpg"
                alt="Norway"
              />
            </div>
            <div className="card">
              <div className="content">
                <p className="content_heading">
                  <b>JavaScript</b>
                </p>
              </div>
              <img
                className="card_image transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-auto"
                src="/images/card_image4.jpg"
                alt="Norway"
              />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
