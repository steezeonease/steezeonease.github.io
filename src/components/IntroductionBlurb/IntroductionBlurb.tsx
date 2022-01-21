import styles from "./IntroductionBlurb.module.scss";
import { Icon } from "@fluentui/react/lib/Icon";

export const IntroductionBlurb: React.FC = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.topSection}>
        <div className={styles.emojiPicContainer}>
          <img alt="placeholder" src="https://via.placeholder.com/374x362" />
        </div>
        <div className={styles.blurbText}>
          <h1>Hannah Yi</h1>
          <h2>
            UX Designer{" "}
            <span className={styles.location}>
              <Icon iconName="POISolid" /> Seattle, WA
            </span>
          </h2>
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
