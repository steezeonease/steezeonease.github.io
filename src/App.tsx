import React from "react";
import styles from "./css/App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
initializeIcons();

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Outlet />
      <BackToTopButton />
    </div>
  );
}

export default App;
