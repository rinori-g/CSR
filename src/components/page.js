import react, { useState, useEffect } from "react";
import LajmetItems from "../data/lajmet";
import Lajmet from "./lajmet";
import Sidebar from "./sidebar";

const SinglePage = (props) => {
  const [data, setdata] = useState();
  const myId = props.match.params.id;
  const myData = () =>
    LajmetItems.map((e) => {
      if (e.id == myId) {
        setdata(e);
      } else return null;
    });
  useEffect(() => {
    myData();
  }, []);
  console.log("xhveddd", data);
  return (
    <>
      <div className="container ">
        <div className="singlepage">
          <div className="row">
            <div className="col-8">
              <div className="text-left text-primary mt-5 w-75 mb-5">
                <h1>{data?.title}</h1>
              </div>
              <div className="singlepage_img text-left">
                <img className="img-fluid" src={data?.img} alt="" />
              </div>

              <div className="text-left   w-75 mt-5">
                <span>
                  <p>{data?.content}</p>
                </span>
              </div>
              <p className="text-left text-danger mt-5">{data?.paragraf}</p>
            </div>

            <div className="col-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
