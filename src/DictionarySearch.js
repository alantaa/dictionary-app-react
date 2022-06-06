import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import DataResults from "./DataResults";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("Read");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="DictionarySearch">
        <section>
          <h2> "What does that word mean again?" </h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} />
          </form>
          <p className="hint">
            {" "}
            Suggested words: sunset, wine, yoga, plants...{" "}
          </p>
        </section>
        <DataResults data={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
