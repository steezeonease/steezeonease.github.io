import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { StickyNote } from "../../../components/ProjectPage/StickyNote/StickyNote";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";

import styles from "./prepDoc.module.scss";

export const PrepDoc = () => {
  return (
    <main>
      <ProjectPage
        projectName="Prep Doc"
        projectTagline="A tool to help you prepare for your next healthcare appointment"
        splashScreenContent={{
          image: <img alt="placeholder" src="https://via.placeholder.com/780x620" />,
          caption: "Image of application splash screen",
        }}
      >
        <>
          <ProjectSection header={"The Challenge"}>
            <>
              <div>
                How can we help get people who are non-English speakers, or speakers of a minority
                language in a country with diverse populations, get the medical help they need?
              </div>
              <div style={{ marginTop: "20px" }}>
                <span style={{ fontWeight: 700 }}>Timeline</span>: 1.5 weeks
              </div>
            </>
          </ProjectSection>
          <ProjectSection header={"My Design Process"}>
            <>
              <img width="100%" src={require("./images/designProcess.png")} />
            </>
          </ProjectSection>
          <Ellipsis />
          <ProjectSection header={"Empathize"}>
            <>
              <div>I interviewed 10 participants:</div>
              <ul>
                <li>
                  6 who spoke a primary minority language (Cantonese, Mandarin, Taishanese, Korean)
                </li>
                <li>4 who were in the age group of 60+</li>
                <li>6 females</li>
                <li>All have visited a healthcare provider at least once in their life</li>
              </ul>
              <div className={styles.stickyNotesContainer}>
                <StickyNote
                  text="I feel frustrated when I have to prepare for an appointment because it makes me feel like I should have gone to medical school"
                  backgroundColor="#DCEBCA"
                />
                <StickyNote
                  text="Before my appointment, I have to do research on my own in order to ask the right questions"
                  backgroundColor="#F8F2B9"
                />
                <StickyNote
                  text="I do some homework utilizing the dictionary to help prepare for my appointment"
                  backgroundColor="#FFD0D0"
                />
                <StickyNote
                  text="I feel nervous at the doctors office (regardless of language) because I am not good with medical terminology"
                  backgroundColor="#A0DCFC"
                />
              </div>
              <div>
                I found it interesting that <strong>both</strong> English and non-English speakers
                were preparing information, terminology, questions prior to meeting with their
                healthcare provider.
              </div>
            </>
          </ProjectSection>
          <Ellipsis />
          <ProjectSection header={"Design"}>
            <>
              Through affinity mapping, I was able to synthesize my research and formulate three key
              findings:
              <ul>
                <li>
                  Patients are <strong>preparing for their appointment</strong> somehow — whether
                  that's translating medical terminology in their preferred language, looking up
                  medical terminology definitions, or even writing down questions to ask their
                  doctor
                </li>
                <li>
                  Patients <strong>find it difficult to explain</strong> their medical problem or
                  concern to their doctor due to a language barrier or not knowing the correct
                  medical terminology to use
                </li>
                <li>
                  Patients <strong>feel nervous at the doctor's office</strong> because they are
                  there for a medical concern — usually something bad
                </li>
              </ul>
              <figure className={styles.imageContainer}>
                <img width="100%" src={require("./images/affinityMap.png")} alt="Affinity map" />
                <figcaption>Image of my affinity map</figcaption>
              </figure>
            </>
          </ProjectSection>
          <ProjectSection header="Problem Statement">
            <>
              Patients (<strong>both</strong> English and non-English speaking) need a tool to help
              prepare for their appointments so they can communicate effectively with their
              healthcare provider.
            </>
          </ProjectSection>
          <Ellipsis />
        </>
      </ProjectPage>
    </main>
  );
};
