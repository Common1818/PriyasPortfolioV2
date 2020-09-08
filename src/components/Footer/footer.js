/* eslint-disable */
import React from "react";
import $ from "jquery";
import "./css/footer.css";
const Footer = () => {
  const goToTop = () => {
    $("html, body").animate({ scrollTop: 100 }, 600);
  };
  return (
    <div className="footer">
      <div className="">
        <a rel="noopener noreferrer" onClick={goToTop}>
          <i className="footer-arrow fas fa-angle-double-up"></i>
        </a>
      </div>
      <div className="contact-icons">
        <a
          rel="noopener noreferrer"
          id="insta"
          target="_blank"
          href="http://instagram.com"
        >
          <i className="fab icon fa-instagram"></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="http://github.com">
          <i className="fab icon fa-github"></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="http://gmail.com">
          <i className="far icon fa-envelope"></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="http://twitter.com">
          <i className="fab icon fa-twitter"></i>
        </a>
      </div>

      <div className="footnote">
        <span className="foot-name">Priya Bihani</span>
        <span className="rights">&copy;2020</span>
      </div>
    </div>
  );
};

export default Footer;
