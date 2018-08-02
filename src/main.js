import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import { DiffContainer } from 'wayback-diff';

document.addEventListener("DOMContentLoaded", function() {

  const wbd = <div id="wayback-diff"></div>;
  ReactDOM.render(wbd, document.getElementById('mount'));

  ReactDOM.render(<DiffContainer fetchCallback = {null} />,
                  document.getElementById('wayback-diff'));

});
