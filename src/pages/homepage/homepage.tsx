import { NavLink } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import linkedInLogo from "../../images/linkedin.svg";
import mail from "../../images/mail.svg";
import styles from "./Homepage.module.scss";

export const Homepage: React.FC = () => {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.topSection}>
          <div className={styles.avatarContainer}>
            <img alt="Memoji Hi" src={require("../../images/selfie.png")} />
          </div>
          <div className={styles.blurbText}>
            <h1 className={styles.name}>
              Hello,
              <br />
              I'm Hannah!
            </h1>
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
            <h2 className={styles.locationText}>
              UX Designer | <span className={styles.location}>Seattle, WA</span>
            </h2>
            <h3 className={styles.blurb}>
              I listen, acknowledge, and connect with individuals to create products that are
              minimal, intentional, and accessible for communities, at large.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <img src={require("../../images/sammi.png")} alt="Samantha" />
        <div className={styles.testimonialText}>
          <div>
            "This is to say that Hannah might be one of the most dedicated and passionate designers
            I have ever met. She is a trusted team player and cares deeply about those around her."
          </div>
          <div className={styles.testimonialAuthor}>Samantha Chiu - UX Designer</div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <NavLink to="/work/prep-doc" className={styles.navLink}>
          <ProjectCard
            title={"designbysteeze"}
            caseStudyTitle={"Behind the scenes of my portfolio coming to life from scratch."}
            imageSrc={require("../../images/projectPreviews/portfolioPreview.png")}
            imageStyles={{
              width: "100%",
            }}
            imageContainerStyles={{
              backgroundColor: "#C4B0EC",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </NavLink>
        <ProjectCard
          title={"careercafé"}
          caseStudyTitle={
            "A web based application to help you find your next career and connect you with knowledgeable mentors in your particular field of interest. "
          }
          imageSrc={require("../../images/projectPreviews/careerCafePreview.png")}
          imageStyles={{
            width: "100%",
            height: "100%",
          }}
        />
        <ProjectCard
          title={"Candidly Connecting"}
          caseStudyTitle={
            "A business that provides tools and resources for adults to help facilitate discussions to children about diversity and inclusion."
          }
          imageSrc={require("../../images/projectPreviews/candidlyConnectingPreview.png")}
          imageStyles={{
            width: "100%",
            height: "100%",
          }}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={
            "A mobile application that will help you feel more prepared for your next healthcare appointment."
          }
          imageSrc={require("../../images/projectPreviews/prepDocPreview2.png")}
          imageStyles={{
            bottom: 0,
            right: -150,
            width: "100%",
          }}
          imageContainerStyles={{
            backgroundColor: "#C4B0EC",
          }}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerSocialContainer}>
          <a href="mailto: designbysteeze@gmail.com">designbysteeze@gmail.com</a>
        </div>
        <div className={styles.footerSocialContainer}>
          <a href="https://www.linkedin.com/in/steeze/">linkedin.com/in/steeze</a>
        </div>
      </div>
    </>
  );
};
