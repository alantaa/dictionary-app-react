import React from "react";

export default function DataMeaning(props) {
  return (
    <div className="DataMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
