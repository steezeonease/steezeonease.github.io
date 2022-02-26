import React from "react";
import styles from "./BackToTopButton.module.scss";
import chevron from "./backToTopChevron.svg";

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 10) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 6);
    }
  };

  const onDocumentScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(c > 1900);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", onDocumentScroll);

    return function cleanUp() {
      document.removeEventListener("scroll", onDocumentScroll);
    };
  });

  return isVisible ? (
    <div className={styles.root} onClick={scrollToTop}>
      <img src={chevron} alt="" />
    </div>
  ) : (
    <></>
  );
};
