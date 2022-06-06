import React from "react";
import "./DataResults.css";
import DataMeaning from "./DataMeaning";
import Phonetics from "./Phonetics";

export default function DataResults(props) {
  if (props.data) {
    return (
      <div className="DataResults">
        <h2 className="title">{props.data.word}</h2>
        {props.data.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <DataMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
