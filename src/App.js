import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div>
        <Results />
      </div>
    </Router>
  );
}

export default App;
