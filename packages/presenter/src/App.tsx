import React from "react";
import ReactDOM from "react-dom";
import LibraryView from "./components/Library/LibraryView";

import "./index.css";

const App = () => (
  <>
    <LibraryView />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
