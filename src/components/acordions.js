import react, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import ShpalljeItems from "../data/shpalljet";
import Home from "./home";

function Accordion(props) {
  const [isOpen, setOpen] = useState(false);

  console.log("accordioni", props);
  if (isOpen === true) {
    return (
      <>
               
      <div className=" accordion" id={"accordion-" + props.description}>
        <i className="accordion_content">{props.props.description}</i>
        <button className="button1" onClick={() => setOpen(false)}>
          <i className="fa fa-angle-up fa-3x"></i>
        </button>
      </div>
      </>
    );
  } else return null;
}
export default Accordion;
