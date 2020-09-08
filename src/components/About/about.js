import React, { useEffect, useContext } from "react";
import { AboutContext } from "../../contexts/aboutContext";
import $ from "jquery";
import "./css/about.css";

const About = () => {
  useEffect(() => {
    const $animation_elements = $(".animation-element");
    const $window = $(window);

    $window.on("scroll resize", check_if_in_view);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("in-view");
        }
      });
    }
  });

  const { about } = useContext(AboutContext);
  const aboutArray = about && about.about;
  const aboutImageUrl = aboutArray && aboutArray[0];
  const getUrl = aboutImageUrl && aboutImageUrl.imageUrl;
  const aboutDescription1 = aboutArray && aboutArray[0];
  const aboutDescription = aboutDescription1 && aboutDescription1.aboutText;
  const skills = aboutArray && aboutArray[1];
  const skillsArray = skills && skills.skills;
  console.log(skillsArray);

  return (
    <section id="about" className="">
      <header className="header animation-element">About</header>
      <div className="about-container">
        <div className="about-item animation-element">
          <div>
            <img alt="MyPhoto" src={getUrl && getUrl} />
          </div>
          <div className="about-image-text-item">
            {aboutDescription && aboutDescription}
          </div>
        </div>
        <div className="about-item">
          <div className="skills-bar animation-element">
            {skillsArray &&
              skillsArray.map((skill) => {
                return (
                  <div key={skill.name} className="bar-item">
                    <div className="barLabel">{skill.name}</div>
                    <div className="bar animation-element"></div>
                    <span className="skill-val">{skill.value}%</span>
                  </div>
                );
              })}
          </div>
          <div id="box"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
