/* src/components/Header.js */

import React from "react";
import "../styles/Header.css"
import f1 from "../images/f1.jpg";

function Header() {
  return (
    <div>
      <h1> Clicky Game! </h1>
      <p>
        Click on an image to earn points, but don't click on any more than once!
      </p>

      <div className="container">
        <img src={f1} alt="F1" id="imgBB"/>
      </div>

    </div>
  );
}

export default Header;
