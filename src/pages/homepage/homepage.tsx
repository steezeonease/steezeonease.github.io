import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import linkedInLogo from "../../images/linkedin.svg";
import mail from "../../images/mail.svg";
import monstera from "../../images/monstera.svg";
import styles from "./Homepage.module.scss";
import appStyles from "../../css/App.module.scss";
import dahlia from "../../images/dahlia-cropped.png";
import { Parallax } from "react-scroll-parallax";
import { css } from "@fluentui/react/lib/Utilities";

export const Homepage: React.FC = () => {
  return (
    <>
      <div className={styles.topSection}>
        <div className={css(styles.topSectionInner, appStyles.containerSection)}>
          <h1 className={styles.name}>
            <img src={monstera} alt="" />
            <span>H</span>annah Yi
          </h1>
          <h2 className={styles.locationText}>
            UX Designer | <span className={styles.location}>Seattle, WA</span>
          </h2>
          <div className={styles.socialContainer}>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/steeze/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInLogo} alt="LinkedIn icon" />
            </a>
            <a className={styles.socialLink} href="mailto: designbysteeze@gmail.com">
              <img src={mail} alt="Mail icon" />
            </a>
          </div>
        </div>
        <Parallax className={styles.testing} speed={-20}>
          <img className={styles.dahlia} src={dahlia} alt="Dalhia flower" />
        </Parallax>
      </div>
      <div className={css(styles.aboutMe, appStyles.containerSection)}>
        <p className={appStyles.noMarginTop}>
          I'm a UX Designer based in Seattle, the city of rain.
        </p>
        <p>
          My joys in life is to leave a positive imprint by adding a touch of humanity to others'
          daily life experiences.
        </p>
        <p className={appStyles.noMarginBottom}>
          I put my curiosity to work by listening, engaging, and connecting with individuals to
          design better products for communities at large.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <ProjectCard
          title={"careercafé"}
          caseStudyTitle={"How might we support users in their career searching process?"}
          imageSrc={require("../../images/projectPreviews/careercafecropped.jpg")}
          backgroundOpacity={0.5}
          linkTo={"careercafe"}
        />
        <ProjectCard
          title={"Ziefah Health"}
          caseStudyTitle={
            "How might we make it easier for Muslim youth to access culturally fit therapists?"
          }
          imageSrc={require("../../images/projectPreviews/ziefahbg.jpg")}
          backgroundOpacity={0.5}
          linkTo={"ziefahhealth"}
        />
        <ProjectCard
          title={"NSE Tropicals"}
          caseStudyTitle={
            "How might I redesign this site to better the shopping experience for fellow plant collectors?"
          }
          imageSrc={require("../../images/projectPreviews/nsetropicals.jpg")}
          backgroundOpacity={0.3}
          linkTo="nsetropicals"
        />
        <ProjectCard
          title={"designbysteeze"}
          caseStudyTitle={"How might a husband and wife collaborate to build something beauitful?"}
          imageSrc={require("../../images/projectPreviews/designbysteeze.jpg")}
          backgroundOpacity={0.4}
          linkTo="designbysteeze"
        />
      </div>
    </>
  );
};
