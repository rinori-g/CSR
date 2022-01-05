import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-4 text-left">
              <h2>Location</h2>
              <p>Somewhere in Kosova, Prishtin</p>
              <p>Vushtrri</p>
              <p>Qaty dikun</p>
              <p>Mitrovica</p>
            </div>
            <div className="col-4 text-left">
              <h2>About the web</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolorum eius facere deserunt, possimus modi a, voluptates, ullam
                accusamus blanditiis libero porro commodi ab dolores eaque ipsam
                veniam maxime dicta.
              </p>
            </div>
            <div className="col-4">
              <h2>Contact</h2>
              <p>Email: info@info.com</p>
              <p>Number: 044105576 </p>
            </div>
          </div>
        </div>
        <div className="col-12 p-3 mt-3  bg-info text-white">
          @copyright: CACCTTUS
        </div>
      </div>
    </>
  );
};
export default Footer;
