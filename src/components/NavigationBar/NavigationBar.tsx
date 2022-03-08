import { css, IconButton } from "@fluentui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { NavigationLink } from "./NavigationLink";

export const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasShadow, setHasShadow] = React.useState<boolean>(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  const onDocumentScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    setHasShadow(c > 20);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", onDocumentScroll);

    return function cleanUp() {
      document.removeEventListener("scroll", onDocumentScroll);
    };
  });

  return (
    <div className={styles.root}>
      <div
        className={css(styles.navigationContainer, {
          [styles.isOpen]: isOpen,
          [styles.hasShadow]: hasShadow,
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
        <div className={styles.navParent}>
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
              href="https://dl.dropboxusercontent.com/s/bhrbenkkdwn50em/Hannah%20Yi%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
