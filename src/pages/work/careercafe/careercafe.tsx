import React from "react";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";
import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { IProjectDetails } from "../../../components/ProjectPage/ProjectDetailsTable/IProjectDetails";
import { ProjectDetailsTable } from "../../../components/ProjectPage/ProjectDetailsTable/ProjectDetailsTable";
import { ImageHeader } from "../../../components/ProjectPage/ImageHeader/ImageHeader";
import { css } from "@fluentui/utilities";

import appStyles from "../../../css/App.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";

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
      projectName="careercafé"
      projectTagline="A web based application to help you find your next career and connect you with knowledgeable mentors in your particular field of interest."
      projectBackground={require("../../../images/projectheader/careercafe.jpg")}
      imageOpacity={0.4}
    >
      <>
        <div className={appStyles.textSection}>
          <ProjectDetailsTable details={projectDetails} />
        </div>
        <Ellipsis />
        <ProjectSection isLineHidden>
          <>
            <p className={appStyles.noMarginTop}>
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
        <ParallaxBanner
          layers={[
            {
              image: `${require("../../../images/careercafe/imageheaders/careercafehighway.jpg")}`,
              speed: -20,
            },
          ]}
          style={{
            height: 520,
            marginBottom: 30,
          }}
        ></ParallaxBanner>
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
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
              alt="competitive analysis"
              src={require("../../../images/careercafe/competitiveanalysis.jpg")}
            />
            <img
              className={css(appStyles.dropShadow, appStyles.threeQuarterWidthProjectImage)}
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
        <ProjectSection header={<>Lemonade</>} isLineHidden>
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
              className={css(appStyles.dropShadow, appStyles.threeQuarterWidthProjectImage)}
              alt="Lemonade screenshot"
              src={require("../../../images/careercafe/lemonade.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>CareerExplorer</>} isLineHidden>
          <>
            <p>
              CareerExplorer is a direct comopetitor as it allows users to take a skill assessment
              and get matched with careers. As we took their career assessment, we really liked the
              progress bar feature as it gave us an idea of where we were in the assessment and how
              much more we had left. It was a very simple structure yet so informational.
            </p>
            <img
              className={css(appStyles.dropShadow, appStyles.smallerWidthProjectImage)}
              style={{
                maxWidth: 254,
              }}
              alt="CareerExplorer screenshot"
              src={require("../../../images/careercafe/careerexplorer.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Microsoft Reach</>} isLineHidden>
          <>
            <p>
              I personally used this site when I was trying to find mentors within the UX Designer
              community prior to pursuing the career. This site allows you to browse mentors who
              work at Microsoft and book a call within the website itself. We appreciated the
              formatiting of the mentor profiles and the efficiency in booking a call to meet with a
              mentor.
            </p>
            <img
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
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
        <ProjectSection header={<>I'd Like to Introduce Sebas &amp; Vanessa</>}>
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
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
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
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
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
              trying to create a "one stop shop" where a user could access every helpful tool
              possible to support them in their career search.
            </p>
            <p>We started with sticky noting our ideas down for all the features we wanted.</p>
            <img
              className={appStyles.smallerWidthProjectImage}
              alt="sticky notes"
              src={require("../../../images/careercafe/pivot1.jpg")}
            />
            <p>
              Then we proceeded with a card sort to think how we would map out all of our ideated
              features in the navigation.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Home navigation card sort"
              src={require("../../../images/careercafe/navigation.jpg")}
            />
            <p>
              As we divided our tasks to create sketches and wireframes with designated features, we
              realized that we made the mistake of not defining our focus problem.
            </p>
            <p>
              There was no way we were building out all these features within the time frame we had.
              We also realized that the user would feel very overwhelmed with the amount of features
              we had on our platform.
            </p>
            <p>We wanted our users to utilize our platform not scare them away.</p>
          </>
        </ProjectSection>
        <ProjectSection header={<>Defining the Core Problem</>} isLineHidden>
          <>
            <p>
              We had to remind ourselves that we couldn't help all the problems people were facing,
              but we could focus on the most re-occuring one that was encountered during our
              research. So we switched gears and decided to focus on creating a problem statement.
            </p>
            <p>
              <div className={appStyles.projectSmallerHeader}>Problem Statement</div>
              People exploring career options need a way to assess their characteristics and skills
              so that they can find a suitable and fulfilling career.
            </p>
            <p>
              <div className={appStyles.projectSmallerHeader}>Solution</div>A web application where
              users can assess their passions, skills, and personality traits so they they can find
              a suitable career and fulfilling career. As well as find and connect with knowledgable
              mentors who can support the user through the career switching process.
            </p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/develop.jpg")}
          headerName={<>Develop</>}
        />
        <ProjectSection header={<>Vanessa's User Flow</>}>
          <>
            <p>
              Keeping Vanessa in mind, we created a user flow to help us better understand the user
              journey throughout utilizing our platform.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="User flow"
              src={require("../../../images/careercafe/userflow.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Sketching Solutions</>}>
          <>
            <p>
              Every ideation started off in the lowest fidelity so we could iterate; increase
              efficiency and reduce waste. We intitally sketched out the home page which then led to
              sketching out the onboarding process: taking a skill and personality assessment,
              getting matched with careers, creating an account, and saving career matches.
            </p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Homepage sketch"
              src={require("../../../images/careercafe/homepagesketch.jpg")}
            />
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Assessment sketch"
              src={require("../../../images/careercafe/sketch2.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Bringing It To Life</>}>
          <>
            <p>
              After deciding the layout of the screens, we designed low fidelity wireframes in Figma
              based on our initial sketches. Here are snippets of the screens prior to developing a
              higher fidelity mockup.
            </p>
            <img
              alt="Higher fidelity mockup"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/careercafe/mockup.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>The Cozy Moodboard</>} isLineHidden>
          <>
            <p>
              Before moving on to the UI design, we began designing or logo and moodboard. Our
              vision was to create an atmosphere where users felt comfortable as if they were at a
              cafe meeting up with a friend; very casual and inviting.
            </p>
            <img
              alt="Logo ideas"
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
              src={require("../../../images/careercafe/careercafelogos.jpg")}
            />
            <img
              alt="Moodboard"
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
              src={require("../../../images/careercafe/moodboard.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/iterate.jpg")}
          headerName={<>Iterate</>}
        />
        <ProjectSection header={<>Test Test Test</>} isLineHidden>
          <>
            <p>
              We focused the end of our sprint running usability testing to iterate and refine our
              design. With our high fidelity Figma prototype, we had the users complete these 3
              specific tasks through our platform to clarify pain points and frustrations.
            </p>
            <ul>
              <li>Take the assessment and get matched with a career</li>
              <li>Find information on how to become a UX Designer</li>
              <li>Find the mentor Sabrina Chen and book an appointment with her </li>
            </ul>
            <p>
              We refined and iterated our design based on the feedback that was given through
              usability testing.
            </p>
            <img
              alt="User feedback from testing"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/careercafe/userfeedback.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/deliver.jpg")}
          headerName={<>Deliver</>}
        />
        <ProjectSection header={<>Introducing careercafé</>} isLineHidden>
          <>
            <p>I'd like to introduce our final creation: careercafé.</p>
            <p>
              A web application where you can take a skills assessment, get matched with suitable
              careers, and connect with knowledgable mentors.
            </p>
            <p>
              No more feeling alone in the dark. We're here to support you throughout your career
              switching journey.
            </p>
            <div className={appStyles.flexibleContainer}>
              <iframe
                title={"Prototype"}
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGohLRf2xv3xHkl9K1tJ85D%2Fcareercaf%25C3%25A9%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D241%252C48%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2"
                allowFullScreen
              ></iframe>
            </div>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/careercafe/imageheaders/thefuture.jpg")}
          headerName={<>The Future</>}
        />
        <ProjectSection header={<>Next Steps</>}>
          <>
            <p>
              We were passionate about the creation of careercafé as the challenge resonated with
              each one of us on the team. Our future steps would be to:
            </p>
            <ul>
              <li>
                Conduct a second round of usability testing to identify further pain points and
                frustrations to improve the user experience
              </li>
              <li>Prep design hand off to pass to developers</li>
              <li>Launch the first version of careercafé</li>
            </ul>
          </>
        </ProjectSection>
        <ProjectSection header={<>Self Reflection</>} isLineHidden>
          <>
            <p>
              This project was my first time working in a team environment within the UX field. I
              absolutely loved working in a team as we were able to split up tasks and collaborate
              on ideas. During collaboration, I really enjoyed observing how others work and think.
              I realized that I actually prefer working in a team environment vs solo projects
              because you have support from your team. I appreciated all the feedback throughout the
              journey which has strengthened my skills as a UX Designer.
            </p>
            <p>
              As we only had 2 weeks for this sprint, we didn't have much time at the end to run
              usability testing. I realized the importance of usability testing; it's a crucial
              process and does wonders in uncovering user issues that we may have been blinded from
              or neglected.
            </p>
            <p>
              We were passionate about the creation of careercafé as the challenge resonated with
              each one of us on the team. At one point in our lives, we felt what the users were
              going through in taking that scary leap of switching careers; being in that space of
              unknowing. It was a pleasure to collaborate with a team to create something
              purposeful, mindful, and useful.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Project team"}
              src={require("../../../images/careercafe/teamphoto.jpg")}
            />
          </>
        </ProjectSection>
      </>
    </ProjectPage>
  );
};
