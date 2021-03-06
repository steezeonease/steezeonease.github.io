import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/Homepage";
import { About } from "./pages/about/About";
import { PrepDoc } from "./pages/work/prepdoc/prepDoc";
import { ZiefahHealth } from "./pages/work/ziefahhealth/ziefahhealth";
import { DesignBySteeze } from "./pages/work/designbysteeze/designbysteeze";
import { CareerCafe } from "./pages/work/careercafe/careercafe";
import { NSETropicals } from "./pages/work/nsetropicals/nsetropicals";

import ScrollToTop from "./ScrollToTop";

import reportWebVitals from "./reportWebVitals";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "html5-device-mockups/dist/device-mockups.min.css";
import "react-medium-image-zoom/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />
              <Route path="work" element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="work/prepdoc" element={<PrepDoc />} />
              <Route path="work/designbysteeze" element={<DesignBySteeze />} />
              <Route path="work/ziefahhealth" element={<ZiefahHealth />} />
              <Route path="work/careercafe" element={<CareerCafe />} />
              <Route path="work/nsetropicals" element={<NSETropicals />} />
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
