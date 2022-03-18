import React from "react";
import styles from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Outlet } from "react-router-dom";
import { SocialBar } from "./components/SocialBar/socialbar";
initializeIcons();

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Outlet />
      <div className="flex justify-center my-8">
        <SocialBar />
      </div>
    </div>
  );
}

export default App;
