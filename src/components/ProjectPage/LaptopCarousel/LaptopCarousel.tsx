import React from "react";
import { Carousel } from "react-responsive-carousel";

import { MacbookPro } from "react-device-mockups";
import styles from "./LaptopCarousel.module.scss";

export interface IImage {
  imagePath: string;
  altText: string;
}

export interface ICarouselProps {
  images: IImage[];
}

export const LaptopCarousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
  const { images } = props;

  const renderedCarousel = images.map((value, key) => {
    return (
      <div key={key}>
        <img src={value.imagePath} alt={value.altText} />
      </div>
    );
  });

  return (
    <div className={styles.root}>
      <MacbookPro width={"100%"}>
        <Carousel
          className={styles.carousel}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          interval={3000}
          showArrows={false}
          renderThumbs={undefined}
        >
          {renderedCarousel}
        </Carousel>
      </MacbookPro>
    </div>
  );
};
