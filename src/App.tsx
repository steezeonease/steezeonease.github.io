import React from "react";
import styles from "./css/App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Footer } from "./components/Footer/Footer";
initializeIcons();

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Outlet />
      <BackToTopButton />
      {Footer}
    </div>
  );
}

export default App;
