import React from "react";
import { Carousel } from "react-responsive-carousel";
import i22 from "./../images/22.jpeg";
import Banner from "./../images/banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <Carousel
          autoPlay={true}
          dynamicHeight={false}
          infiniteLoop={true}
          autoFocus={true}
          showThumbs={false}
        >
          <div>
            <img src={Banner} alt="image-1" />
            <div className="home_content">
              <h1>PUNË PRAKTIKE ME PAGESË</h1>
              <p>
                Platformë e lidhjes së bizneseve me praktikantë nga e gjithë
                Kosova
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/register";
                }}
              >
                Regjistrohu
              </button>
            </div>
          </div>
          <div>
            <img src={i22} alt="image-2" />
          </div>
          <div>
            <img src={Banner} alt="image-3" />
            <div className="home_content">
              <h1>Unicef</h1>
              <h2>GENU</h2>
              <h3>CSR</h3>
              <p className="text-center w-50 paragraf">
                Lorem ipsum It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
