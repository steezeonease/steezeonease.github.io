import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styles from "./ImageHeader.module.scss";

interface IImageHeader {
  imageSrc: string;
  headerName: JSX.Element;
  color: string;
  imageOpacity?: number;
}

export const ImageHeader: React.FC<IImageHeader> = (props: IImageHeader) => {
  const { imageSrc, headerName, color, imageOpacity } = props;

  return (
    <ParallaxBanner className={styles.bannerRoot} layers={[{ image: `${imageSrc}`, speed: -5 }]}>
      {imageOpacity && <div className={styles.imageOpacity} style={{ opacity: imageOpacity }} />}
      <div className={styles.root} style={{ color: color }}>
        {headerName}
      </div>
    </ParallaxBanner>
  );
};
