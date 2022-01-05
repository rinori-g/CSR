import react, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";

function rmModal(idja) {
  // idja.preventDefault();
  document.getElementById(idja).remove();
}

function Modal(props) {
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
      <div className="modal" id={"modal-" + props.id}>
        <i className={props?.props?.icon} />
        <h3>{props.props.name}</h3>
        <p>{props.props.description}</p>
        {/* <input type="text" placeholder="qka po thom kqyre logun" onChange={handleInput} defaultValue={input}/>  */}
        <button onClick={() => setOpen(false)}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
  } else return null;
}
export default Modal;
