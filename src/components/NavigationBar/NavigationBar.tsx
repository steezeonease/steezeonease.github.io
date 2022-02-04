import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import logo from "../../images/logo.svg";

export const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navigationContainer}>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </div>
  );
};
