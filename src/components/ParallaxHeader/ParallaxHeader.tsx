import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { HLogo } from "../HLogo/HLogo";
import styles from "./ParallaxHeader.module.scss";
import appStyles from "../../css/App.module.scss";

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
      <div className={appStyles.containerSection}>
        <div className={styles.topSection}>
          <HLogo />
          {props.children}
        </div>
      </div>
    </ParallaxBanner>
  );
};
