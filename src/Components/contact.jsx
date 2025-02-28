import React from "react";
import "./contact.scss";
import ContactForm from "./contacform";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div class="contact_main">
      <div class="sec">
      <div className="services-heading">
            <h1 class="text-black-900 text-4xl pt-4 font-semibold">Services</h1>
            <div className="services-line"></div>
          </div>

          <div className="contact-content">

          <div class="right_sec w-lg">
          <div>
          <p class="">CONTACT INFO</p>
            <p class="contact-heading-name  text-2xl ">Get in Touch</p>
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
            <div className="text-gray-500">FOLLOW US:</div>
            <div className="contact-footer-socials gap-5">
        
        <a href="https://www.facebook.com/archana.ekka.77" className="social-icon">
        <img
              class="socials-icon"
              src="/images/facebook_icon.png"
              alt="Description of the image"
              width={30}
              height={30}
            />

        </a>
        <a href="https://www.linkedin.com/in/archana-ekka-99a563333/" className="social-icon"> <img
              class="socials-icon"
              src="/images/linkedin-icon.png"
              alt="Description of the image"
              width={30}
              height={30}
            /></a>
        <a href="https://www.instagram.com/archanaekka00/" className="social-icon"> 
        <img
              class="socials-icon"
              src="/images/instagram-icon.png"
              alt="Description of the image"
              width={30}
              height={30}
            /></a>

                          
              
              <a href="https://www.linkedin.com/in/archana-ekka-99a563333/">
                {" "}
                <img
                class="icon"
                src="/images/github_icon.png"
                alt="Description of the image"
                width={30}
                height={30}
              />  
              </a>
              
      </div>
          </div>
        </div>
        <div class="left_sec w-lg">
        <div class="test rounded-md">
        <ContactForm />
      </div>
        </div>

          </div>
       
      </div>
      {/* <div class="test rounded-md">
        <ContactForm />
      </div> */}
    </div>                                                    
  );
};

export default Contact;
