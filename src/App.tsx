import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const PresenterApp = React.lazy(() => import("Presenter/App"));

import "./index.css";

const App = () => (
  <div className="container">
    <Suspense fallback={<>Oh no</>}>
      <PresenterApp />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
