import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/homepage";
import { About } from "./pages/about/about";
import { ZiefahHealth } from "./pages/ziefahhealth/ziefahhealth";
import { NSETropicals } from "./pages/nsetropicals/nsetropicals";
import { DesignBySteeze } from "./pages/designbysteeze/designbysteeze";
import ReactGA from "react-ga";

import reportWebVitals from "./reportWebVitals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";

const ScrollToTopOnRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    console.log(location.pathname);
    ReactGA.pageview(location.pathname);
  }, [location.pathname]);
  return <>{children}</>;
};

ReactGA.initialize("G-RBBMWGBFR3");

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTopOnRoute>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="work/ziefahhealth" element={<ZiefahHealth />} />
            <Route path="work/nsetropicals" element={<NSETropicals />} />
            <Route path="work/designbysteeze" element={<DesignBySteeze />} />
          </Route>
        </Routes>
      </ScrollToTopOnRoute>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
