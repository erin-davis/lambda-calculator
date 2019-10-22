import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {numbers} from "./data.js";

ReactDOM.render(<App nums = {numbers} />, document.getElementById("root"));
