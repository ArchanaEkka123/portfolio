import React from "react";
import "./contact.scss";
import ContactForm from "./contacform";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div class="contact_main">
      <div class="sec">
        <div class="right_sec ">
          <div>
            <p class="line p-2">Archana Ekka</p>
          </div>

          <div class="contact">
            <div class="contact_caintainer p-2 ">
              <img
                class="icon "
                src="/images/call-icon.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <p class="Description">9772144125</p>
            </div>
            <div class="contact_caintainer p-2">
              <img
                class="icon"
                src="/images/mail-icon.png"
                alt="Description of the image"
                width={20}
                height={20}
              />

              <p class="Description">archanaekka97555@gmail.com</p>
            </div>
            <div class="contact_caintainer p-2">
              <img
                class="icon"
                src="/images/icons-linkedin.svg"
                alt="Description of the image"
                width={20}
                height={20}
              />

              <a href="https://www.linkedin.com/in/archana-ekka-99a563333/">
                {" "}
                Linkedin
              </a>
            </div>
            <div class="contact_caintainer p-2">
              <img
                class="icon"
                src="/images/house-icon.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <p class="Description">Sankar Nagar Raipur</p>
            </div>
          </div>
        </div>
        <div class="left_sec">
        <img src="/images/image7.jpeg" alt="Floating Image" 
          width={300}
          height={600}
          className=" myimage  rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 "
          />
        </div>
      </div>
      {/* <div class="test rounded-md">
        <ContactForm />
      </div> */}
    </div>                                                    
  );
};

export default Contact;
