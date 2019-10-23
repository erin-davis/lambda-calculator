import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <>
    <button>{props.opChar}</button>
    <button>{props.opVal}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default OperatorButton;
