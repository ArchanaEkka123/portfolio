import React from "react";
import "./projects.scss";
import { motion } from "framer-motion";
const Projects = () => {
  return (
        
      <div class="projects-main p-8">
        <div className="projects-heading">
          <motion.div
            className="text-3xl font-bold"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 class="projects-heading-top text-black-900 text-4xl pt-4 font-semibold">
              Projects
            </h1>
          </motion.div>

          <div className="projects-line"></div>
        </div>

        <div className="projects-content-holder">
             {/* Sliding in from the left! */}
          <motion.div
            className=""
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <div className="projects-card-holder">
              <div className="projects-card">
                <img
                  className="icon-1"
                  src="/images/design-icon1.png"
                  alt="Description of the image"
                  width={40}
                  height={40}
                />
                <p className="projects-card-heading"> Web/UX Design</p>
                <p className="projects-card-description">
                  {" "}
                  https://tailwind-project-gamma-amber.vercel.app/
                </p>
              </div>
              <div className="projects-card">
                <img
                  className="icon-1"
                  src="/images/design-icon3.png"
                  alt="Description of the image"
                  width={40}
                  height={40}
                />
                <p className="projects-card-heading"> Web/UX Design</p>
                <p className="projects-card-description">
                  {" "}
                  https://portfolio-dummy02-n.vercel.app/
                </p>
              </div>
              <div className="projects-card">
                <img
                  className="icon-1"
                  src="/images/design-icon2.png"
                  alt="Description of the image"
                  width={40}
                  height={40}
                />
                <p className="projects-card-heading">Web/UX Design</p>
                <p className="projects-card-description">
                  {" "}
                  https://travel-n4sa.vercel.app/
                </p>
              </div>
              <div className="projects-card">
                <img
                  className="icon-1"
                  src="/images/design-icon1.png"
                  alt="Description of the image"
                  width={40}
                  height={40}
                />
                <p className="projects-card-heading">Web/UX Design</p>
                <p className="projects-card-description">
                  {" "}
                  https://archana-portfolio-one.vercel.app/
                </p>
              </div>
            </div>
            </motion.div>
          
           {/* Sliding in from the right! */}
          <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <div className="projects_card_image_box">
              <img
                className="projects_card_image rounded-md"
                src="/images/card_image2.jpg"
                alt="Norway"
                width={400}
                height={400}
              />
            </div>
            
          </motion.div>
        </div>
      </div>
          );
};

export default Projects;

{/* <motion.div
            className=""
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          ></motion.div> */}