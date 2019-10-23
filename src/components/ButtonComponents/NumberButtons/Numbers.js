import React, {useState, useEffect} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

export const Numbers = () => {
  //const [numberState, setNumberState] = useState(0);
  // STEP 2 - add the imported data to state
  //const thatNumber =

  return (
    <div>
    {numbers.map((num)=>{
      return <NumberButton number={num} />;
    })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
