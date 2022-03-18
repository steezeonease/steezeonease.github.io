import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// Pages
import { Homepage } from "./pages/homepage/homepage";
import { ZiefahHealth } from "./pages/ziefahhealth/ziefahhealth";

import reportWebVitals from "./reportWebVitals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="work/ziefahhealth" element={<ZiefahHealth />} />
          {/* <Route path="work/nsetropicals" element={<NSETropicals />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
