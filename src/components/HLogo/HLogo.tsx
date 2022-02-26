import React from "react";
import { Link } from "react-router-dom";
import styles from "./HLogo.module.scss";

import monstera from "./monstera.svg";

export const HLogo: React.FC = () => {
  return (
    <h1 className={styles.name}>
      <img src={monstera} alt="" />
      <Link to="/">
        <span>H</span>
      </Link>
    </h1>
  );
};
