import React from "react";
import styles from "./Footer.module.scss";
import linkedInLogo from "../../images/linkedin.svg";
import mail from "../../images/mail.svg";
import { SocialButton } from "../SocialButton/SocialButton";

export const Footer = (
  <div className={styles.footer}>
    <SocialButton href="https://www.linkedin.com/in/steeze/">
      <img src={linkedInLogo} alt="LinkedIn icon" />
    </SocialButton>
    <SocialButton href="mailto: designbysteeze@gmail.com">
      <img src={mail} alt="Mail icon" />
    </SocialButton>
  </div>
);
