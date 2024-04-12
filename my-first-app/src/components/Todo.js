import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalisOpen, setModalisOpen] = useState(false);

  function deleteHandler() {
    setModalisOpen(true);
  }

  function closeModelHandler(){
    setModalisOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalisOpen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler}/>}
        {modalisOpen && <Backdrop  onCancel={closeModelHandler}/>}
      </div>
    </div>
  );
}

export default Todo;
