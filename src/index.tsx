import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/homepage";
import { About } from "./pages/about/about";
import { ZiefahHealth } from "./pages/ziefahhealth/ziefahhealth";
import { NSETropicals } from "./pages/nsetropicals/nsetropicals";

import reportWebVitals from "./reportWebVitals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";

const ScrollToTopOnRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRoute>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="work/ziefahhealth" element={<ZiefahHealth />} />
            <Route path="work/nsetropicals" element={<NSETropicals />} />
          </Route>
        </Routes>
      </ScrollToTopOnRoute>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
