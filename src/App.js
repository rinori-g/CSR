// import logo from './logo.svg';
import "./App.css";
import Menu from "./components/menu";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/services";
import Modal from "./components/modal";
import MobileMenu from "./components/mobileMenu";
import SinglePage from "./components/page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <MobileMenu />
        <div className="">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Contact} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/services/:id" component={Modal} />
          <Route exact path="/page/:id" component={SinglePage} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
