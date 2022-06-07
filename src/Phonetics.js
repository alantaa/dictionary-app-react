import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p>
        {" "}
        <audio controls src={props.phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>{" "}
      </p>

      <p className="phoneticsText">{props.phonetics.text}</p>
    </div>
  );
}
