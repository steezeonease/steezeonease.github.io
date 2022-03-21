import React from "react";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Outlet } from "react-router-dom";
import { SocialBar } from "./components/SocialBar/socialbar";
import { css } from "@fluentui/react";
initializeIcons();

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const setMenuStatus = (status: boolean) => {
    setIsMenuOpen(status);
  };

  return (
    <div
      className={css("flex flex-col", {
        "overflow-hidden": isMenuOpen,
        "h-screen": isMenuOpen,
      })}
    >
      <NavigationBar setMenuStatus={setMenuStatus} isMenuOpen={isMenuOpen} />
      <Outlet />
      <div className="flex justify-center my-8">
        <SocialBar />
      </div>
    </div>
  );
}

export default App;
