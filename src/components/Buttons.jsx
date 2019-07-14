import React from "react";
import "../App.css";

const Buttons = ({ handleResetButton, handleStartButton }) => (
  <div id="buttons">
    <p id="start_stop" onClick={handleStartButton}>
      <span className="fas fa-play">&#9658;</span>
      <span className="fas fa-pause">| |</span>
    </p>
    <p id="reset" onClick={handleResetButton}>
      <span className="fas fa-undo">&#x21B6;</span>
    </p>
  </div>
);

export default Buttons;
