import React from "react";
import "./services.scss";
const Services = () => {
  return (
    // <div id="root">
      <div class="main ">
        <div class="main_inner p-10">
          <div>
            <h1 class="text-black-900 text-4xl p-4 font-semibold">Archana Ekka</h1>
          </div>

          <div class="Services">
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
          </div>  

          <div class="projects">
            <h2 class="text-black-900 text-2xl  font-semibold"> Projects</h2>
            <div class="">
              <p>
                <a href="https://experteeth.in/">Experteeth</a>
              </p>
            </div>
            <div class="">
              <p>
               
                <a href="https://travel-planners.co.in/">Travel-Planners</a>
              </p>
            </div>
            <div class="">
              <p>
                
                <a href="https://portfolio-478n.vercel.app/">Portfolio</a>
              </p>
            </div>
            <div class="">
              <p>
                
                <a href="https://tailwind-project-gamma-amber.vercel.app/">Portfolio-Tailwind</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Services;
