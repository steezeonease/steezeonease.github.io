import linkedInWhite from "../../images/linkedinWhite.svg";
import mailWhite from "../../images/mailWhite.svg";
import monstera from "../../images/monstera.svg";
import styles from "./About.module.scss";
import aboutbg from "../../images/aboutbg.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

export const About: React.FC = () => {
  return (
    <>
      <ParallaxBanner layers={[{ image: `${aboutbg}`, speed: -20 }]}>
        <div className="containerSection">
          <div className={styles.topSection}>
            <h1 className={styles.name}>
              <img src={monstera} alt="Monstera" />
              <span>H</span>
            </h1>
            <div className={styles.aboutBlurb}>
              <div className={styles.header}>I am human.</div>
              <div className={styles.bodyText}>
                "This is to say that Hannah might be one of the most dedicated and passionate
                designers I have ever met. She is a trusted team player and cares deeply about those
                around her."
              </div>
              <div className={styles.author}>Samantha Chiu | UX Designer</div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div className={styles.aboutMe + " containerSection"}>
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
      </div>
      <div className={styles.footer}>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/steeze/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInWhite} alt="LinkedIn icon" />
        </a>
        <a className={styles.socialLink} href="mailto: designbysteeze@gmail.com">
          <img src={mailWhite} alt="Mail icon" />
        </a>
      </div>
    </>
  );
};
