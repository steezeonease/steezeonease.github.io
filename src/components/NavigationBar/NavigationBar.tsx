import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navigationContainer}>
      <nav>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </div>
  );
};
