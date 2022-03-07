import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { css } from "@fluentui/utilities";
import { HLogo } from "../../components/HLogo/HLogo";

import styles from "./About.module.scss";
import appStyles from "../../css/App.module.scss";
import aboutbg from "../../images/aboutbg.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const About: React.FC = () => {
  return (
    <>
      <ParallaxBanner layers={[{ image: `${aboutbg}`, speed: -20 }]}>
        <div className={appStyles.containerSection}>
          <div className={styles.topSection}>
            <HLogo />
            <div className={styles.aboutBlurb}>
              <div className={styles.header}>I am human.</div>
              <div className={styles.bodyText}>
                &ldquo;This is to say that Hannah might be one of the most dedicated and passionate
                designers I have ever met. She is a trusted team player and cares deeply about those
                around her.&rdquo;
              </div>
              <div className={styles.author}>Samantha Chiu | UX Designer</div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div className={css(styles.aboutMe, appStyles.containerSection)}>
        <p>Hello!</p>
        <p>I'm glad you're here! Let me tell you about myself, the person behind the design. </p>
        <p>
          My drive to learn from human beings and my desire to make life easier for others inspired
          my transition to UX Design. Before becoming a UX Designer, I spent 5 years in the
          healthcare industry where patient experience is paramount. I worked closely with patients
          and healthcare providers to deliver the best possible healthcare outcomes. Despite my
          mission to put patients first, I witnessed how many products used in the industry work
          against this mission because of poor design. I'm constantly fired up to use design
          thinking to fill in these gaps for the user, improving experiences for patients and
          beyond.
        </p>
        <p>
          Outside of the professional world, I am an avid plant collector, extreme food enthusiast,
          and an animal lover.
        </p>
        <div className={styles.carouselContainer}>
          <Carousel
            className={styles.carousel}
            autoPlay={true}
            showStatus={false}
            infiniteLoop={true}
            interval={5000}
          >
            <div>
              <img src={require("../../images/aboutpage/po.jpg")} alt="Po my cat" />
            </div>
            <div>
              <img src={require("../../images/aboutpage/plantselfie.jpg")} alt="Me and my plants" />
            </div>
            <div>
              <img src={require("../../images/aboutpage/kiwi.jpg")} alt="Kiwi my dog" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};
