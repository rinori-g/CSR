import ShpalljeItems from "../data/shpalljet";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { render } from "@testing-library/react";
import Filtershpalljet from "./filtershpalljet";

const Shpalljet = () => {
  const [showContent, setShowContent] = useState(false);
  const [data, setdata] = useState();
  const [selectCat, setSelectCat] = useState(false);
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

  const handleClick = (obj) => {
    var element = document.getElementById("btn" + obj).value;
    if (element == 1) {
      setAllIdHidenClass();
    } else {
      closeAllFromMe(obj);
    }
  };
  // const filterClick = (event) => {
  //   // var filter = document.getElementById("filter" + event);
  //   // if (event == data.id) {
  //   //   setdata();
  //   // } else {
  //   //   return null;
  //   // }
  //   // const filterClick = document.getElementById(data.id);
  //   if (event == "1") {
  //     setdata();
  //   } else {
  //     return null;
  //   }
  // };

  function closeAllFromMe(id) {
    setAllIdHidenClass();
    for (var index = 0; index < data.length; index++) {
      if (data[index].id === id) {
        var element = document.getElementById(id);
        element.classList.remove("hide");
        document.getElementById("btn" + id).innerText = "Hide";
        document.getElementById("btn" + id).value = 1;
      }
    }
  }

  function setAllIdHidenClass() {
    for (var index = 0; index < data.length; index++) {
      var element = document.getElementById(data[index].id);
      document.getElementById("btn" + data[index].id).value = 0;
      element.classList.add("hide");
      document.getElementById("btn" + data[index].id).innerText = "Show More";
    }
  }

  if (isLoading) {
    return <div></div>;
  } else
    return (
      <>
        <div className="shpalljet">
          <h1>Shpalljet</h1>
          <div className="container">
            <div className="column">
              <Filtershpalljet />
              {data.map((e) => {
                return (
                  <>
                    <li key={e.id}>
                      <div className="col-12 text-left">
                        <div className="row">
                          <h5>
                            Titulli
                            <br />
                            <br />
                            <b>{e.titulli}</b>
                          </h5>

                          <p>
                            <strong> Emri Kompanis: </strong>
                            {e.emriKompanis}
                          </p>
                          <p>
                            <strong className="text-success">
                              Data e Publikimit:
                            </strong>{" "}
                            {e.dataEpublikimit}
                          </p>
                          <p>
                            <strong className="text-danger">
                              Data e Skadimit:
                            </strong>{" "}
                            {e.dataEskadimit}
                          </p>
                          <p>
                            <strong>Kategorite: </strong>
                            {e.kategorit}
                          </p>
                          <p>
                            <strong> shkathesite: </strong> <br />
                            {e.shkathesite}
                          </p>
                          <button
                            value="0"
                            id={"btn" + e.id}
                            onClick={() => handleClick(e.id)}
                          >
                            {!showContent ? "Show More" : "Hide"}
                          </button>
                          <i id={e.id} className="hide">
                            <strong>{e.kategorit}</strong>
                            <br />
                            <br />
                            <strong>Info rreth konkursit:</strong>
                            <br />
                            <br />
                            {e.description}
                            <br />
                            <br />
                            <b>
                              Per meshum info contact: <br /> info@info.com
                            </b>
                          </i>
                        </div>
                      </div>

                      <hr />
                    </li>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
};
export default Shpalljet;
