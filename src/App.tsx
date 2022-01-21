import React from "react";
import styles from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Outlet } from "react-router-dom";
initializeIcons();

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
