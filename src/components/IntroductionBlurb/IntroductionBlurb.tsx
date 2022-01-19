import styles from "./IntroductionBlurb.module.scss";
import linkedin from "../../images/linkedin.svg";
import medium from "../../images/medium.svg";

export const IntroductionBlurb: React.FC = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.topSection}>
        <div className={styles.emojiPicContainer}>
          <img src="https://via.placeholder.com/362x362" />
        </div>
        <div className={styles.blurbText}>
          <h1>Hannah Yi</h1>
          <h2>UX Designer | Seattle, WA</h2>
          <h3>
            I empathize, acknowledge, and validate human needs to create products that are simple,
            purposeful, and accessible.
          </h3>
        </div>
      </div>
      {/* <div className={styles.socials}>
        <img src={linkedin} />
        <img src={medium} />
      </div> */}
    </div>
  );
};
