import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import linkedInLogo from "../../images/linkedin.svg";
import linkedInWhite from "../../images/linkedinWhite.svg";
import mail from "../../images/mail.svg";
import mailWhite from "../../images/mailWhite.svg";
import monstera from "../../images/monstera.svg";
import styles from "./Homepage.module.scss";
import homepagebg from "../../images/homepagebg.jpg";
import { Parallax } from "react-parallax";

export const Homepage: React.FC = () => {
  return (
    <>
      <Parallax bgImage={homepagebg} bgImageAlt="home page background" strength={300}>
        <div className={styles.topSection + " containerSection"}>
          <h1 className={styles.name}>
            <img src={monstera} alt="Monstera" />
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
      </Parallax>
      <div className={styles.aboutMe + " containerSection"}>
        <p>I'm a UX Designer based in Seattle, the city of rain.</p>
        <p>
          My joys in life is to leave a positive imprint by adding a touch of humananity to others'
          daily life experiences.
        </p>
        <p>
          I put my curiosity to work by listening, engaging, and connecting with individuals to
          design better products for communities at large.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <ProjectCard
          title={"designbysteeze"}
          caseStudyTitle={"Behind the scenes of my portfolio coming to life from scratch."}
          imageSrc={require("../../images/projectPreviews/designsteezecropped.jpg")}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            top: "-12vw",
          }}
        />
        <ProjectCard
          title={"careercafé"}
          caseStudyTitle={
            "A web based application to help you find your next career and connect you with knowledgeable mentors in your particular field of interest. "
          }
          imageSrc={require("../../images/projectPreviews/careercafecropped.jpg")}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            top: "-25vw",
          }}
        />

        <ProjectCard
          title={"Candidly Connecting"}
          caseStudyTitle={
            "A business that provides tools and resources for adults to help facilitate discussions to children about diversity and inclusion."
          }
          imageSrc={require("../../images/projectPreviews/candidlyconnecting.jpg")}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            top: "-9vw",
          }}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={
            "A mobile application that will help you feel more prepared for your next healthcare appointment."
          }
          imageSrc={require("../../images/projectPreviews/prepdoc.jpg")}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            top: "-20vw",
          }}
        />
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
