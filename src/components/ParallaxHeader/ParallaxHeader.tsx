import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import monstera from "../../images/monstera.svg";
import styles from "./ParallaxHeader.module.scss";

interface IParallaxHeader {
  backgroundImage: string;
  imageOpacity: number;
  children?: React.ReactNode;
}

export const ParallaxHeader: React.FC<IParallaxHeader> = (props: IParallaxHeader) => {
  const { backgroundImage, imageOpacity } = props;

  return (
    <ParallaxBanner layers={[{ image: `${backgroundImage}`, speed: -20 }]}>
      {imageOpacity && <div className={styles.imageOpacity} style={{ opacity: imageOpacity }} />}
      <div className="containerSection">
        <div className={styles.topSection}>
          <h1 className={styles.name}>
            <img src={monstera} alt="Monstera" />
            <span>H</span>
          </h1>
          {props.children}
        </div>
      </div>
    </ParallaxBanner>
  );
};
