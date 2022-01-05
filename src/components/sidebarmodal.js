import react, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";

function rmModal(idja) {
  // idja.preventDefault();
  document.getElementById(idja).remove();
}

function Sidebarmodal(props) {
  const [isOpen, setOpen] = useState(true);
  const [input, setinput] = useState("Kosova Republike");

  const handleInput = (e) => {
    let data = e.target.value;
    setinput(data);
    console.log("inputi im", data);
  };

  console.log("mymodalprops", props);
  if (isOpen === true) {
    return (
      <div className="sidebarmodal " id={"modal-" + props.id}>
        <h4>{props?.props?.title} </h4>
        <p>{props?.props?.content}</p>

        {/* <input type="text" placeholder="qka po thom kqyre logun" onChange={handleInput} defaultValue={input}/>  */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
  } else return null;
}
export default Sidebarmodal;
