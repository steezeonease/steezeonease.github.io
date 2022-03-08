import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styles from "./ImageHeader.module.scss";
import * as images from "./images";

interface IImageHeader {
  headerName: JSX.Element;
  imageOpacity?: number;
  headerImageName?: HeaderNames;
  imageSrc?: string;
}

export const enum HeaderNames {
  Background = "background",
  Define = "define",
  Deliver = "deliver",
  Develop = "develop",
  Discover = "discover",
  Iterate = "iterate",
  TheFuture = "thefuture",
}

export const ImageHeader: React.FC<IImageHeader> = (props: IImageHeader) => {
  const { headerName, imageOpacity, headerImageName, imageSrc } = props;

  const image = !!headerImageName ? images[headerImageName] : imageSrc;

  return (
    <ParallaxBanner className={styles.bannerRoot} layers={[{ image: `${image}`, speed: -5 }]}>
      {imageOpacity && <div className={styles.imageOpacity} style={{ opacity: imageOpacity }} />}
      <div className={styles.root}>{headerName}</div>
    </ParallaxBanner>
  );
};
