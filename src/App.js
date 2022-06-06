import "./App.css";

import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <header className="app-header"></header>
      <main>
        <DictionarySearch />
      </main>
      <footer className="app-footer">
        <br />
        Coded by{" "}
        <a
          href="https://extraordinary-stroopwafel-905036.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Alanta
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/alantaa/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
