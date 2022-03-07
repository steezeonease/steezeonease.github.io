import React from "react";
import styles from "./Footer.module.scss";
import linkedInWhite from "../../images/linkedinWhite.svg";
import mailWhite from "../../images/mailWhite.svg";

export const Footer = (
  <div className={styles.footer}>
    <a
      className={styles.socialLink}
      href="https://www.linkedin.com/in/steeze/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={linkedInWhite} alt="LinkedIn icon" />
    </a>
    <a className={styles.socialLink} href="mailto: designbysteeze@gmail.com">
      <img src={mailWhite} alt="Mail icon" />
    </a>
  </div>
);
