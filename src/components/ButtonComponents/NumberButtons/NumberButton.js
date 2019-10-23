import React, {useState, useEffect} from "react";

const NumberButton = (props) => {
  const [display, setDisplay] = useState(0);

  const buttonClick = (event) =>{
    const value = event.target.textContent;
    setDisplay(value);
  }
  return (
    <>
    <button className="numButton" onClick={buttonClick}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
