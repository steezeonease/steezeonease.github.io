import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/Homepage";
import { About } from "./pages/about/about";
import { PrepDoc } from "./pages/work/prep-doc/prepDoc";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="work/prep-doc" element={<PrepDoc />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
