import React from "react";
import "./DataMeaning.css";
import Synonyms from "./Synonyms";

export default function DataMeaning(props) {
  return (
    <div className="DataMeaning">
      <h3 className="title">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example && `"${definition.example}"`}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
