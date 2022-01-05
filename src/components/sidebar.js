import React from "react";
import LajmetItems from "../data/lajmet";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

import Sidebarmodal from "./sidebarmodal";

const Sidebar = () => {
  return (
    <>
      {LajmetItems.map((e) => {
        return (
          <div className="col-12 mb-4 text-left  boxes">
            <div className="card bg-light  p-4">
              <div className="card-body">
                <div className="text-right text-danger">
                  <small>{e.paragraf}</small>
                </div>
                <h5 className="card-title  text-primary">Lajmi</h5>
                <h6 className="card-text">{e.title}</h6>
                <p className="card-text">{e.content.slice(0, 60) + "..."}</p>
                {/* <a href="#" class="btn btn-dark">
                  OUR PLAN
                </a> */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("u klikova", e);
                    render(<Sidebarmodal props={e} id={e.id} />);
                  }}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
