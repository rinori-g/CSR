import { render } from "@testing-library/react";
import React from "react";
import ServiceData from "../data/service";
import Lajmet from "./lajmet";
import Modal from "./modal";
import Shpalljet from "./shpalljet";
function handleClick(data) {
  // e.preventDefaults();
  // data.preventDefault();npm
  console.log("a po bohet click");
  return <Modal props={data} />;
}
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="row">
          {ServiceData.map((data, index) => {
            return (
              <div className="listServices" key={index}>
                <i className={data.icon}> </i>
                <h4>{data.name}</h4>
                <p>{data.description.slice(0, 50) + "..."}</p>
                <button
                  onClick={() => {
                    console.log("u klikova", data);
                    render(<Modal props={data} id={data.id} />);
                  }}
                >
                  Show More
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Lajmet />
    </>
  );
};

export default Service;
