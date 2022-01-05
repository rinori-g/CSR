import React from "react";
import LajmetItems from "../data/lajmet";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Lajmet = () => {
  return (
    <>
      <div className="banner ">
        <h2 className="text-white pt-3">NEWS</h2>

        <div className="container banner_layout">
          <div className="row">
            <Carousel
              autoPlay={true}
              dynamicHeight={false}
              stopOnHover
              infiniteLoop={true}
              autoFocus={true}
              showThumbs={false}
            >
              {LajmetItems.map((e) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-3">
                        <img
                          src={e.img}
                          className="img-fluid img_banner"
                          alt=""
                        />
                        <div className="text-left">
                          <h6 className="text-white  mt-2">
                            {e.title.slice(0, 60) + "  ..."}
                          </h6>
                          <div className="small-paragraf">
                            <small className="text-white ">{e.paragraf}</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-white pt-3 text-left mt-4">
                        <p>{e.content.slice(0, 350) + "..."}</p>
                        <Link to={{ pathname: "/page/" + e.id }}>
                          {" "}
                          <small className="text-white ">
                            Shiko me shume...{" "}
                            <i className="fa fa-arrow-right text-info"></i>
                          </small>{" "}
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lajmet;
