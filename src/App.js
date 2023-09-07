// src/App.js

import React from "react";
import GitHubCard from "./components/GitHubCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <GitHubCard />
    </div>
  );
}

export default App;
