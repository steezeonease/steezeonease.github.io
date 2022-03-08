import React from "react";
import { Carousel } from "react-responsive-carousel";

import { IPhone7 } from "react-device-mockups";

import styles from "./IPhoneCarousel.module.scss";
import { ICarouselProps } from "../LaptopCarousel/LaptopCarousel";

export const IPhoneCarousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
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
      <IPhone7 width={"100%"}>
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
      </IPhone7>
    </div>
  );
};
