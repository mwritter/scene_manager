import React from "react";
import ReactDOM from "react-dom";
import LibraryView from "./components/Library/LibraryView";

const App = () => (
  <div className="container">
    <LibraryView />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
