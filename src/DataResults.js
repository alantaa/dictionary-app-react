import React from "react";
import DataMeaning from "./DataMeaning";
import Phonetics from "./Phonetics";

export default function DataResults(props) {
  if (props.data) {
    return (
      <div className="DataResults">
        <section>
          <h2 className="title">{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <DataMeaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
