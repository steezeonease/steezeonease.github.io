import React from "react";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";
import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { IProjectDetails } from "../../../components/ProjectPage/ProjectDetailsTable/IProjectDetails";
import { ProjectDetailsTable } from "../../../components/ProjectPage/ProjectDetailsTable/ProjectDetailsTable";
import { ImageHeader } from "../../../components/ProjectPage/ImageHeader/ImageHeader";

import appStyles from "../../../css/App.module.scss";
import styles from "./careercafe.module.scss";
import { css } from "@fluentui/react/lib/Utilities";

export const CareerCafe = () => {
  const projectDetails: IProjectDetails = {
    team: [
      {
        name: "Me",
        role: "UX/UI Designer",
      },
      {
        name: "Kennia",
        role: "UX/UI Designer",
      },
      {
        name: "Sammy",
        role: "UX/UI Designer",
      },
    ],
    keySkills: [
      "Secondary Research",
      "User Interviews",
      "Personas",
      "User Flow",
      "Sketches & Wireframes",
      "Usability Testing",
      "High Fidelity Prototype",
    ],
    tools: ["Miro", "Trello", "Figma"],
    timeline: {
      startDate: "January 2022",
      duration: "2 weeks",
    },
  };

  return (
    <ProjectPage
      projectName="designbysteeze"
      projectTagline="A husband and wife collaboration."
      projectBackground={require("../../../images/projectheader/careercafe.jpg")}
      imageOpacity={0.4}
    >
      <>
        <div className={appStyles.textSection}>
          <ProjectDetailsTable details={projectDetails} />
        </div>
        <Ellipsis />
        <ProjectSection>
          <>
            <p>
              My role as planning lead was to ensure timeliness of delivering our product. During
              the 2 week design sprint I facilitated meetings, managed timelines, prioritized tasks,
              and helped create this application utilizing the double diamond design process.
            </p>
            <p>
              It was a pleasure to work with these delightful individuals and I'd do it all over
              again.
            </p>
          </>
        </ProjectSection>
        {/*TODO ADD PARALLAX IMAG HERE*/}

        <ProjectSection header={<>Challenge</>} isLineHidden={true}>
          <>
            <p>
              Somewhere along the way, you may have found yourself not happy or fulfilled with your
              career. You may have wondered if there was another career out there that may fit your
              skills, interests, values, and needs. I know I've been there before; it was a
              difficult time for me as I felt alone and uncertain.
            </p>
            <p>How might we support users in their career searching process?</p>
            <p>We had a timeline of 2 weeks to craft a solution.</p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/discover.jpg")}
          headerName={<>Discover</>}
        />
        <ProjectSection header={<>Empathisizing with Users</>}>
          <>
            <p>
              We started our journey with conducting 14 interviews with participants who were
              screened on the criteria of already switching careers in the past or currently looking
              to switch careers.
            </p>
            <ul>
              <li>Gender: 7 Male | 7 Female</li>
              <li>Age: 12 participants were between the ages of 25–34 years old</li>
              <li>Experience: 12 have already switched careers in the past</li>
            </ul>
            <p>
              It was important for us to gain insight on the participants career journey, tools they
              used during their career switch (human interaction vs digital tools), aspects they
              valued in a career, and any challenges they faced throughout their personal journey.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Information gathering with users"}
              src={require("../../../images/careercafe/discover.jpg")}
            />
            <p>
              After conducting interviews, we created an affinity map to help us organize our
              research in a digestible way. We sorted them in trends of: resources used in career
              exploration, preferences, values, wants, and challenges.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Affinity map"}
              src={require("../../../images/careercafe/wants.jpg")}
            />
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Affinity map"}
              src={require("../../../images/careercafe/affinitymap.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Key Takeaways</>}>
          <>
            <p>
              From conducting 1 on 1 user interviews, affinity mapping, and synthesizing our data we
              concluded that:
            </p>
            <ol>
              <li>
                People would like some sort of skill assessment to help find a suitable career match
              </li>
              <li>
                People prefer human interaction to gain insight on a particular career of interest
              </li>
              <li>
                People utilize the web heavily to research more details and information on a career
              </li>
            </ol>
          </>
        </ProjectSection>
        <ProjectSection header={<>Scope Out the Competition</>} isLineHidden={true}>
          <>
            <p>
              We then analyzed direct and indirect competitors to identify strengths and weaknesses.
              Conducting competitor research was crucial in helping us discover what areas of
              opportunity existed for us.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="competitive analysis"
              src={require("../../../images/careercafe/competitiveanalysis.jpg")}
            />
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Comparative analysis"
              src={require("../../../images/careercafe/comparativeanalysis.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Key Takeaways</>}>
          <>
            <div>
              <p>Pros:</p>
              <ul>
                <li>Feature of career matching based on skills/personalist assessment</li>
                <li>Users can create an account and save their career matches</li>
                <li>Free resources available to help the user during their career search</li>
              </ul>
            </div>
            <div>
              <p>Cons:</p>
              <ul>
                <li>Members have to pay $48/ year to use the service</li>
                <li>Overwhelming amount of resources that are not well organized</li>
                <li>Careers and information on websites are outdated</li>
              </ul>
            </div>
          </>
        </ProjectSection>
        <ProjectSection header={<>Comparing Features</>} isLineHidden={true}>
          <>
            <p>
              We then leaped into comparing the features that might be useful and important in our
              decision making process. I took on the challenge of comparing features on various
              platforms and took screenshots and made note of the importance.
            </p>
          </>
        </ProjectSection>
        <ProjectSection header={<>Lemonade</>}>
          <>
            <p>
              This insurance quote website screams simple and meaningful UI/UX Design because it's
              so easy to navigate through the simple layout, bright pink affordances, and personable
              AI feature. During our interviews, we learned that users who switched careers in the
              past experienced uneasiness and nervousness. It was imperative and we took that into
              account. Lemonade does a really good job in creating a comfortable space for the user
              by incorporating a personable interactive AI questioning method.
            </p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Lemonade screenshot"
              src={require("../../../images/careercafe/lemonade.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>CareerExplorer</>}>
          <>
            <p>
              CareerExplorer is a direct comopetitor as it allows users to take a skill assessment
              and get matched with careers. As we took their career assessment, we really liked the
              progress bar feature as it gave us an idea of where we were in the assessment and how
              much more we had left. It was a very simple structure yet so informational.
            </p>
            <img
              className={appStyles.smallerWidthProjectImage}
              style={{
                maxWidth: 254,
              }}
              alt="CareerExplorer screenshot"
              src={require("../../../images/careercafe/careerexplorer.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Microsoft Reach</>}>
          <>
            <p>
              I personally used this site when I was trying to find mentors within the UX Designer
              community prior to pursuing the career. This site allows you to browse mentors who
              work at Microsoft and book a call within the website itself. We appreciated the
              formatiting of the mentor profiles and the efficiency in booking a call to meet with a
              mentor.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Microsoft Reach screenshot"
              src={require("../../../images/careercafe/microsoftreach.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/define.jpg")}
          headerName={<>Define</>}
        />
        <ProjectSection header={<>I'd Like to Intorduce Sebas &amp; Vanessa</>}>
          <>
            <p>
              Next, we created proto-personas to represent our target audience as well as to build
              empathy with users by capturing their motivations, goals, wants, needs, and
              frustrations.
            </p>
            <p>
              First up is 26 year old Sebas Villa. He is unsatisfied with his current career and is
              looking to explore other career paths that align with his passions and will allow him
              to grow as a person.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Sebas' persona"
              src={require("../../../images/careercafe/sebas.jpg")}
            />
            <p>
              Next is 20 year old Vanessa Liu. She is a sophomore in college and is struggling to
              find a career that aligns with her artistic background. Vanessa has spent endless
              hours researching careers and connecting with her counselor but is feeling
              discouraged.
            </p>
            <p>★ Please keep Vanessa in mind as we take you through our design journey ★</p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Vanessa's persona"
              src={require("../../../images/careercafe/vanessa.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>A Moment of Pivot</>}>
          <>
            <p>
              There was a moment in our design process where our team went a little crazy with the
              amount of features we wanted to implement in our platform. We ran into the issue of
              trying to create a “one stop shop” where a user could access every helpful tool
              possible to support them in their career search.
            </p>
            <p>We started with sticky noting our ideas down for all the features we wanted.</p>
          </>
        </ProjectSection>
        <ProjectSection header={<>Dahlia</>}>
          <>
            <p>
              Since receiving tons of positive feedback on my previous color pallette choice, I
              decided to continue that boldness but this time I took the opposite approach of
              utilizing black instead of white. There's something about the parallax effect and
              midnight black that just compliment each other so welll; it's sleek, elegant, and
              edgy.
            </p>
            <p>
              I'm not huge on flowers but the bright ones really capture me and one of my favorites
              is called the Dahlia. It is native to Mexico and Central America and it's relative to
              the sunflower, daisy, and chrysanthemum. Dahlias add so much dimension through colors
              and petal formation. This second style tile was heavily influenced by my favorite
              flower.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Moodboard"
              src={require("../../../images/designbysteeze/moodboard2.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Responsive Design</>}>
          <>
            <p>
              I'm glad that my husband mentioned designing responsive. Like I said before, he really
              pushes me to strive for more and I appreciate that very much. I figured that many
              users going through my portfolio were most likely going to be on desktop. However, it
              was solid practice for me to design for mobile and challenged my desicion making
              process.
            </p>
            <p>
              Oh also, don't mind the distracting bright yellow stickies on these mockups. They're
              annotations for my husband.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Responsive designs for portfolio"
              src={require("../../../images/designbysteeze/responsive.jpg")}
            />
            <p>Key changes for mobile design:</p>
            <ul>
              <li>
                Moved the header image so there wouldn't be a contrast issue (white text on white
                background)
              </li>
              <li>
                Added buttons as there is no such thing as "hover state" when on a mobile device
              </li>
              <li>Created a hamburger menu for navigation</li>
            </ul>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Responsive designs for portfolio"
              src={require("../../../images/designbysteeze/responsive2.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>I Am Human</>}>
          <>
            <p>
              Be sure to check out my “About” section to learn more about me as a human being. It
              was incredibly important for me to showcase that I am not constantly a working robot
              but that I am also human.
            </p>
            <p>
              I led the this page with a beautiful sunset image with a shadow of a female figure to
              capture the full picture of my header statement. I added one of my favorite
              testimonials from my LinkedIn profile as it continues to tie into the humanness.
            </p>
            <p>
              I'm not only empathetic through my work as a UX Designer, but I choose to be
              empathetic with the people I encounter and the people around me.
            </p>
            <img
              alt="Final portfolio designs"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/designbysteeze/iamhuman.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.3}
          color="#ffffff"
          imageSrc={require("../../../images/designbysteeze/imageheaders/theEndForNow.jpg")}
          headerName={<>The End... For Now</>}
        />
        <ProjectSection isLineHidden={true}>
          <>
            <p>
              As I constantly am growing as a UX Designer, I'll be constantly evolving my portfolio.
              For now, I am happy where it's at and what it's become through incoporating my vision
              and feedback into my iterations. It was truly a rewarding experience to see my designs
              come to life... page by page.
            </p>
            <p>
              It was incredible to have the opportunity to collaborate with a developer. No, we
              didn't argue one bit during our process which made it a very pleasant experience.
              Moving forward, I plan to study more on responsive designs and what other aspects I
              should consider when designing more complex sites and features. There is always room
              for improvement and I look forward to working with all types of developers to
              strengthen my skills in collaboration.
            </p>
            <p>
              For now, I hope you enjoyed the "final" version of my portfolio. Hannah and Eddie out
              *mic drop.*
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Portfolio"}
              src={require("../../../images/designbysteeze/iamhuman.jpg")}
            />
          </>
        </ProjectSection>
      </>
    </ProjectPage>
  );
};
