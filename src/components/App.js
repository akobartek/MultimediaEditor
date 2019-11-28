import React from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <h3>Wybierz rodzaj multimediów, który chcesz edytować:</h3>

          <div className="Title">
            <Link to={`/photo`}>
              <button className="button">Zdjęcie</button>
            </Link>

            <Link to={`/video`}>
              <button className="button">Film</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
