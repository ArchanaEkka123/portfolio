import React from "react";
import "./services.scss";
import { motion } from "framer-motion";
const Services = () => {
  return (
    // <div id="root">
    <div class="main ">
      <div class="main_inner p-10">
        <div className="services-heading">
          <motion.div
            className="text-3xl font-bold"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 class="services-heading-top text-black-900 text-4xl pt-4 font-semibold">
              Services
            </h1>
          </motion.div>

          <div className="services-line"></div>
        </div>

        <div className="services-content-holder">
          <motion.div
            className=""
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="services_card_image_box">
              <img
                className="services_card_image rounded-md"
                src="/images/card_image7.jpg"
                alt="Norway"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
          <motion.div
            className=""
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          ></motion.div>
{/* Sliding in from the right! */}
          <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
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
          </motion.div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
