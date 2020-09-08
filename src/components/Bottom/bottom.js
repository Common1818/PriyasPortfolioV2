import React, { useState } from "react";
import "./css/bottom.css";
import ContactForm from "../contactForm/contactForm";

import Footer from "../Footer/footer";

const Bottom = () => {
  const [Message, setMessage] = useState("Have a question? Ping me...");

  const ContactMessage = (message) => {
    console.log(message);
    setMessage(message);
  };

  return (
    <div className="bottom-content">
      <div id="contact" className="contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="35"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="#f7f7ff" stroke="white"></path>
        </svg>

        <div className="contact-heading animation-element">CONTACT</div>
        <div className="question animation-element">{Message}</div>

        <div className="form animation-element">
          <ContactForm ContactMessage={ContactMessage} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bottom;
