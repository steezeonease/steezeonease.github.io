import React from "react";
import styles from "./SocialButton.module.scss";

interface ISocialButton {
  href: string;
  children: React.ReactNode;
}

export const SocialButton: React.FC<ISocialButton> = (props: ISocialButton) => {
  const { href, children } = props;
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${require("./flower.png")})`,
      }}
    >
      <a className={styles.imgWrapper} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};
