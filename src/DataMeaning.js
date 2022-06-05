import React from "react";
import "./DataMeaning.css";

export default function DataMeaning(props) {
  return (
    <div className="DataMeaning">
      <h3 className="title">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
