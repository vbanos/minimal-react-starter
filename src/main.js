import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import { DiffContainer } from 'wayback-diff';

document.addEventListener("DOMContentLoaded", function() {
  return (
    <DiffContainer fetchCallback = {null}/>
    );
    //ReactDOM.render(
    //React.createElement(Counter),
    //document.getElementById("mount")
});
