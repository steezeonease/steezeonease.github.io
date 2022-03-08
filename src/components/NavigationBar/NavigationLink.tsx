import React from "react";
import { Link, Location } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

interface INavigationLink {
  location: Location;
  text: string;
  toPath: string;
  onToggleMenu: () => void;
}

export const NavigationLink: React.FC<INavigationLink> = (props: INavigationLink) => {
  const { toPath, text, location, onToggleMenu } = props;

  let isActive: boolean = false;

  if (toPath === "/work" && location.pathname === "/") {
    isActive = true;
  } else {
    isActive = location.pathname.indexOf(toPath) > -1;
  }

  return (
    <Link to={toPath} onClick={onToggleMenu} className={isActive ? styles.isActive : ""}>
      {text}
    </Link>
  );
};
