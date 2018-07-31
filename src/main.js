import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import waybackDiff from "wayback-diff";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById("mount")
  );
});
