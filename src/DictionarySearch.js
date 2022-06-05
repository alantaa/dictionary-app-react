import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
