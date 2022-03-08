import { css, IconButton } from "@fluentui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import appStyles from "../../css/App.module.scss";
import { NavigationLink } from "./NavigationLink";

export const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  console.log(location);

  return (
    <div className={appStyles.containerSection}>
      <div
        className={css(styles.navigationContainer, {
          [styles.isOpen]: isOpen,
        })}
      >
        <div className={styles.menuButton}>
          {!isOpen ? (
            <IconButton
              className={styles.iconButton}
              iconProps={{
                iconName: "GlobalNavButton",
              }}
              onClick={onToggleMenu}
            />
          ) : (
            <IconButton
              className={styles.iconButton}
              iconProps={{ iconName: "Cancel" }}
              onClick={onToggleMenu}
            />
          )}
        </div>
        <nav>
          <NavigationLink
            location={location}
            text="Work"
            toPath="/work"
            onToggleMenu={onToggleMenu}
          />
          <NavigationLink
            location={location}
            text="About"
            toPath="/about"
            onToggleMenu={onToggleMenu}
          />
          <a
            href="https://dl.dropboxusercontent.com/s/dlkax1q2no4m2o8/Hannah%20Yi%20Resume.docx"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};
