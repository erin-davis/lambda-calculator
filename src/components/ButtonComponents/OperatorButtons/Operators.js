import React, {useState} from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";
//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
    {operators.map((op)=>{
      return <OperatorButton opChar={op.char} opVal={op.value} />;
    })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
