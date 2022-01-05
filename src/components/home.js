import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "./slider";
import Lajmet from "./lajmet";
import Bannerabout from "./bannerabout";
import Shpalljet from "./shpalljet";
import Filtershpalljet from "./filtershpalljet";

const Home = (props) => {
  return (
    <div className="home">
      <Slider />
      <Lajmet />
      <Shpalljet />
      <Bannerabout />
    </div>
    // </div>
  );
};

export default Home;
