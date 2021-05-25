import React from "react";
import ReactDom from "react-dom";

const num = "7";
const fName = "Gotamraj";
const lName = "Sahu";
const currentYear = new Date().getFullYear();

ReactDom.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Panir</li>
      <li>Sandwitch</li>
      <li>Pizza</li>
      <li>Biriyani</li>
    </ul>
    <h2>My lucky number is {num}</h2>
    <h2>Hello {fName + " " + lName}</h2>
    <h2>
      Hello {fName} {lName}
    </h2>
    <p>Created by {fName + " " + lName}.</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
