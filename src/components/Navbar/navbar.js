/* eslint-disable */
import React, { useEffect } from "react";
import $ from "jquery";
import "./css/navbar.css";

const Navbar = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(window).on("scroll", function (e) {
        const scroll = window.scrollY;

        const firstPageHeight = $(".large-header").height();
        const aboutPageHeight = $("section#about").height();
        const projectPageHeight = $("div#projects").height();
        const contactPageHeight = $("div#contact").height();

        if (
          scroll >= firstPageHeight &&
          scroll < firstPageHeight + aboutPageHeight
        ) {
          $("nav li a#home").removeClass("active");
          $("nav li a#project").removeClass("active");
          $("nav li a#contact").removeClass("active");
          $("nav li a#about").addClass("active");
        }
        if (
          scroll >= firstPageHeight + aboutPageHeight &&
          scroll < firstPageHeight + aboutPageHeight + projectPageHeight
        ) {
          $("nav li a#home").removeClass("active");
          $("nav li a#project").addClass("active");
          $("nav li a#contact").removeClass("active");
          $("nav li a#about").removeClass("active");
        }
        if (
          scroll >= firstPageHeight + aboutPageHeight + projectPageHeight &&
          scroll <
            firstPageHeight +
              aboutPageHeight +
              projectPageHeight +
              contactPageHeight
        ) {
          $("nav li a#home").removeClass("active");
          $("nav li a#project").removeClass("active");
          $("nav li a#contact").addClass("active");
          $("nav li a#about").removeClass("active");
        }
      });
    });
  });

  return (
    <nav className="animation-element overflow">
      <li>
        <a
          id="home"
          className="page-link"
          onClick={() => {
            $("html, body").animate({ scrollTop: 10 }, 600);
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="page-link"
          id="about"
          onClick={() => {
            const offset = $(".large-header").height();
            $("html, body").animate({ scrollTop: offset + 5 }, 600);
          }}
        >
          About
        </a>
      </li>
      <li>
        <a
          id="project"
          className="page-link"
          onClick={() => {
            const offset1 = $(".large-header").height();
            const offset2 = $("section#about").height();
            $("html, body").animate({ scrollTop: offset1 + offset2 + 5 }, 600);
          }}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            const offset1 = $(".large-header").height();
            const offset2 = $("section#about").height();
            const offset3 = $("div#projects").height();
            $("html, body").animate(
              { scrollTop: offset1 + offset2 + offset3 + 5 },
              600
            );
          }}
          id="contact"
          className="page-link"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
