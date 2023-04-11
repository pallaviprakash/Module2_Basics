//Poprs is an object which contains properties with values
// usestate is react hook can be used inside custom componet which is used to change the state(exxample opening modal or closing modal) 
// usestate always  returns an array with exactly 2 elements
//const [modalIsOpen, setModalIsOpen] = useState(false);
//1st element modalIsOpen is a varaible which holds usestate intial value(false)
//2nd element setModalIsOpen is function to change that usestate intial value

import { useState } from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler(){
    //console.log("clicked");
    //console.log(props.text);
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return(
        <div className="myappDiv">
            <h2>{props.text}</h2>
            <div className="myappDiv"> 
              <button className="myappDiv" onClick={deleteHandler}>Delete</button> 
            </div>
            {modalIsOpen && (
                <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}
export default Todo; // name of function(custom function) should start with capital letter