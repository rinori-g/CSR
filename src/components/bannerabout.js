import React from "react";

const Bannerabout = () => {
  return (
    <>
      {" "}
      <div className="banner_about">
        <div className="container ">
          <div className="about_us">
            <div className="about_layout">
              <h1>About US</h1>
              <p>
                Kosovogenu.com është platformë online në kuadër të iniciativës
                së lokalizuar Kosovo Generation Unlimited, që përkrahet nga
                Programi i UNICEF-it në Kosovë dhe Agjencia Suedeze për Zhvillim
                Ndërkombëtar.
              </p>
              <p>
                Projekti Kosovo Generation implementohet nga Rrjeti CSR Kosova
                dhe ka për qëllim avancimin e një koalicioni shumë-sektorial në
                Kosovë që prodhon agjendë të përbashkët për transformimin e
                tregut të punës në Kosovë, të krijojë mundësi për të adresuar
                nevojat e paplotësuara të të rinjëve në fushën e edukimit,
                zhvillimit të aftësive të tyre dhe mundësisë së qasjes në treg
                të punës.
                <p>Platforma kosovogenu.com</p>
                ka për mision të ofrojë mundësi për vetë-zhvillim përmes gjetjes
                së punës praktike në kompanitë e ndryshme në Kosovë, trajnimeve
                online dhe ligjëratave. Kjo platformë synon të përmirësojë
                qasjen dhe kualitetin e punëve praktike dhe të ngrisë njohuritë
                për këto punë për të rinjtë.{" "}
              </p>
              <br />
              <p>
                Kosovogenu.com ofron hapësirë virtuale ku kompanitë dhe
                organizatat që operojnë në Kosovë të publikojnë ofertat e tyre
                për punë praktike, të kërkojnë praktikante, dhe, në të njëjtën
                kohë, të rinjtë që janë në kërkim të një pune praktike mund të
                krijojnë profilet e tyre, të shohin punët praktike që janë në
                dispozicion dhe të aplikojnë në ato punë.
              </p>
              <br />A po kërkoni punë praktike? Regjistrohuni këtu A jeni biznes
              që po kërkoni praktikantë? Na dërgo email në *
              kosovogenu@csrkosovo.org që të ju hapim llogarinë
            </div>
            <div className="circle">
              <p>HELLO FROM KOSOVA UNLIMITED GENERATIOIN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5 text-left">
        <div className="col-12 mb-5">
          <small style={{ color: "red" }}>KOSOVO GENERATION UNLIMITED</small>
          <h1>
            <strong>KONTAKTI</strong>{" "}
          </h1>
          <p style={{ color: "#4E6582" }}>
            Mund të na shkruani email, ose të përdorni formën e mëposhtme për
            kontakt më të shpejtë.
          </p>
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <form>
                <div className="form-group text-left">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group text-left">
                  <label for="exampleInputName">Emri</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group text-left">
                  <label for="exampleFormControlTextarea1">Your message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn text-white  p-3 w-25 mb-3 button1"
                >
                  Dergo
                </button>
              </form>
            </div>
            <div className="col-4 text-left p-5">
              <p>
                Adresa: <br />
                Tringë Smajli Nr. 23, <br />
                Prishtinë
              </p>
              <p>
                Email: <br />
                kosovogenu@csrkosovo.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bannerabout;
