import React, { PureComponent, Fragment } from "react";
import axios from "axios";
import useHandleChange from "use-handle-change";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Filtershpalljet = (props, id) => {
  const [data, setdata] = useState();

  const [showdata, setshowdata] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const getData = () => {
    axios
      .get("http://localhost:8000/api/shpalljet/all")
      .then((data) => {
        console.log("shpalljet", data.data);
        setdata(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  console.log("tedhenat", data);
  useEffect(() => {
    getData();
    window.localStorage.setItem("ourkey", "diqkapalidhje");
  }, []);
  // const handleChange = (data) => {
  //   this.setState({ emriKompanis: data.target.value });
  //   if (data === data.id) {
  //     setdata();
  //   } else {
  //     return "null";
  //   }
  // };
  // const filterClick = (e) => {
  //   setshowdata(e.target.value);

  //   if (e === data.id) {
  //     setshowdata();
  //   } else {
  //     return "null";
  //   }
  //   console.log("filterbaba" + setshowdata());
  // };

  if (isLoading) {
    return <div></div>;
  } else
    return (
      <>
        <div className="container">
          <li>
            <div className="selectoption">
              <div className="row">
                <div className="col-6">
                  <select
                    style={showdata === data.id ? { display: "hide" } : {}}
                  >
                    <option selected>Emri i kompanis </option>
                    {data.map((e) => (
                      <option
                        value={e.emriKompanis}
                        // onClick={() => handleChange(e.id)}
                      >
                        {e.emriKompanis}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <select onClick="">
                    <option selected>Titulli i konkursit</option>

                    {data.map((e) => (
                      <option value={e.titulli}>{e.titulli}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </li>
        </div>
      </>
    );
};

export default Filtershpalljet;
