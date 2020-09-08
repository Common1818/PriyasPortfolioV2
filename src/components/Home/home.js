/* eslint-disable */
import React, { useEffect, useContext } from "react";
import $ from "jquery";
import "./css/home.css";
import { HomeContext } from "../../contexts/homeContext";

const Home = () => {
  useEffect(() => {
    $(window).on("scroll resize", () => {});

    $(document).ready(function () {
      console.log("ready!");
      $(window).resize(function () {
        if (window.innerWidth < 600) {
          $(".arrow").css("transform", "rotateZ(90deg)");
        }
      });
    });

    $(document).ready(function () {
      console.log("ready!");
      if (window.innerWidth < 600) {
        setTimeout(function () {
          $(".arrow").css("transform", "rotateZ(90deg)");
          $(".viewmywork").css("background-color", " rgb(0, 166, 216)");
        }, 3000);
      }
    });
  });

  // content logic
  const { home } = useContext(HomeContext);
  const homeDataArray = home && home.home;
  const homeData = homeDataArray && homeDataArray[0];

  const homeContentText = homeData && homeData.Content;
  const homeContentHighlight = homeData && homeData.Highlight;
  const highlightLength = homeContentHighlight && homeContentHighlight.length;
  const textLength = homeContentText && homeContentText.length;
  const sliceStartIndex =
    homeContentText && homeContentText.indexOf(homeContentHighlight);

  const sliceEndIndex = sliceStartIndex + highlightLength;
  const highlightedText =
    homeContentText && homeContentText.slice(sliceStartIndex, sliceEndIndex);
  const textBefore =
    homeContentText && homeContentText.slice(0, sliceStartIndex);
  const textAfter =
    homeContentText && homeContentText.slice(sliceEndIndex, textLength);

  //
  // const homeLoaded = home && home.homeLoaded;

  return (
    <section id="home" className="flex overflow">
      <div className="demo container">
        <div className="content">
          <div id="large-header" className="large-header">
            <canvas id="canvas" className="canvas-background"></canvas>

            <div className="main-title">
              {textBefore && textBefore}
              <br />
              <span className="highlight">
                {highlightedText && highlightedText}
              </span>
              <br /> {textAfter && textAfter}
              <a
                onClick={() => {
                  const offset1 = $(".large-header").height();
                  const offset2 = $("section#about").height();
                  $("html, body").animate(
                    { scrollTop: offset1 + offset2 + 5 },
                    600
                  );
                }}
                className="button viewmywork"
              >
                {homeData && homeData.ButtonContent}
                <i id="arrow" className="fas fa-arrow-right arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
