import React, { useState, useEffect } from "react";
import axios from "axios";
import Shpalljet from "./shpalljet";
import Bannerabout from "./bannerabout";
const About = () => {
  const [about, setabout] = useState("");
  const [data, setdata] = useState([]);
  const [isLoadin, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then((response) => {
        console.log("te dhenat", response.data.length);
        setdata(response.data);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    // setabout('U Loadirat')
    getData();
  }, []);

  return (
    <>
      <div className="about">
        <Bannerabout />

        <div className=" col-12 ">
          <div className="column">
            <h2 className="mb-4">Name of university we works with...</h2>

            <div className=" col-12">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-4 mb-3  card bg-light text-dark text-center">
                  <h1>University </h1>
                </div>
                <div className="col-4 mb-3  card bg-light text-dark text-center">
                  <h1>University Links</h1>
                </div>
              </div>
            </div>

            {data.map((el) => {
              <h1>I'm About {about}</h1>;
              return (
                <h6>
                  <div className="col-12  d-flex justify-content-center">
                    <div class="col-4 mr-3 border  border-info rounded-pill card bg-success text-white ">
                      <div class="card-body">{el.name}</div>
                    </div>

                    <div class="col-4 card border  border-success rounded-pill bg-info text-dark br-4 ">
                      <div class="card-body">{el.domains}</div>
                    </div>
                  </div>
                </h6>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
