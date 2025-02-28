import React from "react";
import "./services.scss";
const Services = () => {
  return (
    // <div id="root">
      <div class="main ">
        <div class="main_inner p-10">
          <div className="services-heading">
            <h1 class="text-black-900 text-4xl pt-4 font-semibold">Services</h1>
            <div className="services-line"></div>
          </div>

          {/* <div class="Services">
            <div class="Services_caintainer">
              <h2 class="text-black-900 text-2xl  font-semibold">Website Design and Development</h2>
              <p class="Description">
                Building responsive and interactive websites that adapt to
                different screen sizes (desktop, tablet, mobile). Ensuring a
                consistent look and feel across all pages. Integrating
                animations and transitions for enhanced user experience.
              </p>
            </div>
            <div class="Services_caintainer">
              <h2 class="text-black-900 text-2xl  font-semibold">Web Application Development</h2>
              <p class="Description">
                Developing single-page applications (SPAs) using modern
                JavaScript frameworks like React.js, Angular, or Vue.js.
                Implementing complex UI features, such as drag-and-drop, modals,
                or real-time updates.
              </p>
            </div>

            <div class="Services_caintainer">
              <h2 class="text-black-900 text-2xl  font-semibold">Responsive and Mobile-First Design</h2>
              <p class="Description">
                Creating layouts and designs optimized for mobile devices using
                CSS frameworks like Bootstrap or Tailwind CSS. Implementing
                flexible grid systems and media queries for responsiveness.
              </p>
            </div>
          </div>   */}

<div className="services-content-holder">
<img
          className="about_card_image rounded-md"
          src="/images/card_image7.jpg"
          alt="Norway"
          width={500}
          height={500}
        />



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
              <p className="services-card-description"> Developing the User Interface (UI):</p>
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
              <p className="services-card-description"> Developing the User Interface (UI):</p>
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
              <p className="services-card-description"> Developing the User Interface (UI):</p>
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
              <p className="services-card-description"> Developing the User Interface (UI):</p>
            </div>
          </div>



        </div>

          
          
        </div>
      </div>
    // </div>
  );
};

export default Services;
