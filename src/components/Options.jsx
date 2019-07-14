import React from "react";
import "../App.css";

const Options = ({ breakLength, sessionLength, handleOptionsButtons }) => (
  <div id="options" onClick={handleOptionsButtons}>
    <div id="break-options">
      <p id="break-label">Break Length</p>
      <div className="break">
        <p>
          <span id="break-decrement" className="fas fa-2x fa-caret-up">
            &lt;
          </span>
        </p>
        <p id="break-length">{breakLength}</p>
        <p>
          <span id="break-increment" className="fas fa-2x fa-caret-down">
            &gt;
          </span>
        </p>
      </div>
    </div>
    <div id="session-options">
      <p id="session-label">Session Length</p>
      <div className="session">
        <p>
          <span id="session-decrement" className="fas fa-2x fa-caret-up">
            &lt;
          </span>
        </p>
        <p id="session-length">{sessionLength}</p>
        <p>
          <span id="session-increment" className="fas fa-2x fa-caret-down">
            &gt;
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Options;
