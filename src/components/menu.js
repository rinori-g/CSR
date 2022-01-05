import { render } from "@testing-library/react";
import react from "react";
import { Link } from "react-router-dom";
import MenuItems from "../data/menu";
import Logo from "./../images/logo.png";

const Menu = () => {
  return (
    // render(
        <>
            <div className="menu">

        <div className="logo">
        <img src={Logo}  alt="LOGO"  />
      </div>

      
      <ul>
        {MenuItems.map((el) => {
          return (
            <li>
              <i className={el.icon}> </i> <a href={el.url}>{el.title} </a>
            </li>
          );
        })}
        <a href="https://mentorship4youth.net/"  target="_blank" style={{ color: "#F16D30"}}>MENTORSHIP IV YOUTH</a>
      </ul>
    </div>
    );
    </>
  );
};

export default Menu;
