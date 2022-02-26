import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/Homepage";
import { About } from "./pages/about/About";
import { PrepDoc } from "./pages/work/prepdoc/prepDoc";
import { DesignBySteeze } from "./pages/work/designbysteeze/designbysteeze";
import { CareerCafe } from "./pages/work/careercafe/careercafe";

import ScrollToTop from "./ScrollToTop";

import reportWebVitals from "./reportWebVitals";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="work/prepdoc" element={<PrepDoc />} />
              <Route path="work/designbysteeze" element={<DesignBySteeze />} />
              <Route path="work/careercafe" element={<CareerCafe />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
