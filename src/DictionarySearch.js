import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import DataResults from "./DataResults";
import Photos from "./Photos";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("Code");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelApiKey =
      "563492ad6f917000010000010ebf316127104347b12ef3c5a0fb97f7";
    const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
          <h1 className="intro"> "What does that word mean again?" </h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} />
          </form>
          <p className="hint">
            {" "}
            Suggested words: sunset, cats, robot, plants...
          </p>
        </section>
        <DataResults data={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
