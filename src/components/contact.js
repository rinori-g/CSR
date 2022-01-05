import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [data, setData] = useState({});

  const handleEmail = (e) => {
    const od = Object.assign({}, data);
    od.email = e.target.value;
    setData(od);
  };
  const handleName = (e) => {
    const od = Object.assign({}, data);
    od.name = e.target.value;
    setData(od);
  };
  const handleMessage = (e) => {
    const od = Object.assign({}, data);
    od.message = e.target.value;
    setData(od);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dataobj", data);
  };

  console.log("dataobj", data);

  return (
    <>
      <div className="contact">
        <h1>REGJISTROHU</h1>
        <p>
          Krijo profilin tënd për t'u bërë pjesë e platformës KosovoGenu!
          Plotëso profilin për t'u lidhur me punëdhënësin adekuat Ke vështirësi
          gjatë procesit? Na shkruaj në kosovogenu@csrkosovo.org{" "}
        </p>
        <div className="row">
          <div className="col-5">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                onChange={handleName}
              ></input>
              <select class="form-select" aria-label="Default select example">
                <option selected>Komunat</option>
                <option value="1">Prishtin</option>
                <option value="2">Przren</option>
                <option value="3">Peje</option>
                <option value="4">Mitrovic</option>
                <option value="5">Gjakov</option>
                <option value="6">Vushtrri</option>
                <option value="7">Ferizaj</option>
                <option value="8">Gjilan</option>
              </select>
              <input type="datetime-local" placeholder="Datelindja"></input>
              <input type="text" placeholder="Adressa"></input>
              <textarea
                type="text"
                placeholder="Your Message"
                onChange={handleMessage}
              ></textarea>
            </form>
          </div>
          <div className="col-5">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Mbiemri"
                onChange={handleName}
              ></input>
              <input
                type="email"
                placeholder="Email"
                onChange={handleEmail}
              ></input>
              {data && data.email && (
                <span>Emaili juaj eshte : {" " + data.email}</span>
              )}
              <select class="form-select" aria-label="Default select example">
                <option selected>Gjinia</option>
                <option value="1">Mashkull</option>
                <option value="2">Femen</option>
                <option value="3">Tjeter</option>
              </select>
              <div class="wrapper">
                <select name="" id="" class="form-control">
                  <option selected="">Shkathesit</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                  <option value="">Five</option>
                  <option value="">Six</option>
                  <option value="">Seven</option>
                  <option value="">Eight</option>
                  <option value="">Nine</option>
                  <option value="">Ten</option>
                  <option value="">Ten</option>
                  <option value="">Ten</option>
                  <option value="">Ten</option>

                  <option value="">Ten</option>
                </select>
              </div>
            </form>
            <button type="submit">REGJISTROHU</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
