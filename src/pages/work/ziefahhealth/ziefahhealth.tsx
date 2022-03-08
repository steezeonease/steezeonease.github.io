import React from "react";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";
import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { IProjectDetails } from "../../../components/ProjectPage/ProjectDetailsTable/IProjectDetails";
import { ProjectDetailsTable } from "../../../components/ProjectPage/ProjectDetailsTable/ProjectDetailsTable";
import { HeaderNames, ImageHeader } from "../../../components/ProjectPage/ImageHeader/ImageHeader";

import appStyles from "../../../css/App.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { css } from "@fluentui/utilities";

export const ZiefahHealth = () => {
  const projectDetails: IProjectDetails = {
    team: [
      {
        name: "Me",
        role: "UX/UI Designer",
      },
      {
        name: "Spencer",
        role: "UX/UI Designer",
      },
      {
        name: "Jordy",
        role: "UX/UI Designer",
      },
    ],
    keySkills: [
      "Secondary Research",
      "User Interviews",
      "Personas",
      "User Flow",
      "Empathy Map",
      "User Journey Map",
      "Sketches & Wireframes",
      "Usability Testing",
      "High Fidelity Prototype",
    ],
    tools: ["Miro", "Trello", "Figma"],
    timeline: {
      startDate: "February 2022",
      duration: "2 weeks",
    },
  };

  return (
    <ProjectPage
      projectName="Ziefah Health"
      projectTagline="A mobile application where Muslim youth can connect with Muslim therapists."
      projectBackground={require("../../../images/projectheader/ziefahhealth.jpg")}
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
              image: `${require("../../../images/ziefahhealth/imageheaders/ziefahheader.jpg")}`,
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
              In November 2018, Bilal tried to end his life. For years, Bilal struggled with anxiety
              and depression. However, due to shame and lack of resources he never got the help he
              needed. Muslim mental health is real and has been an ongoing challenge for too long as
              there lies stigma around mental health and the religion. Ziefah Health wants to bring
              culturally appropriate mental health support to minority youth by connecting them with
              therapists from similar backgrounds who understand the nuances of their upbringing.
            </p>
            <p>How might we make it easier for Muslim youth to access culturally fit therapists?</p>
            <p>We had a timeline of 2.5 weeks to craft a solution.</p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          headerImageName={HeaderNames.Discover}
          headerName={<>Discover</>}
        />
        <ProjectSection header={<>Dealing with Constraints</>}>
          <>
            <p>
              Our biggest constraints for this project were both time and recruitment. It was a
              challenge to find our targeted user group of Muslim youth between the ages of 18 and
              24 years old. Our client warned us that it be a challenge to recruit Muslims to talk
              through such a sensitive topic.
            </p>
            <p>
              We worked around this challenge by sending out a Google survey. As the survey got
              around we ended up receiving responses from only 2 individuals who were Muslim.
            </p>
            <p>
              However, we were able to collect data and information from people who were first or
              second generation immigrants who came from a religious background which still helped
              us tremendously in learning about the challenges and barriers people faced.
            </p>
            <p>We ended up interviewing 4 people and received survey data from 16 participants.</p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Affinity map"}
              src={require("../../../images/ziefahhealth/affinitymap.jpg")}
            />
            <img
              className={css(appStyles.fullWidthProjectImage, appStyles.noMarginBottom)}
              alt={"Phone conversation on therapist qualities"}
              src={require("../../../images/ziefahhealth/textinterview.jpg")}
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
              <li>People have preferences when looking for therapists</li>
              <li>People rely on trusted sources to find a therapist</li>
              <li>People deal with certain challenges when finding a therapist</li>
              <li>People have various reasons why they seek therapy</li>
            </ol>
          </>
        </ProjectSection>
        <ProjectSection header={<>Being Mindful</>} isLineHidden={true}>
          <>
            <p>
              I have never encountered anyone in my life who was from a Muslim religion. It was
              imperative for us to study some background and educate ourselves on the religion prior
              to designing a product for the targeted user group.
            </p>
            <p>
              Our goal was to design inclusive and to be mindful of terminology, tradition, and
              culture. Our wonderful research lead helped us understand the religion a bit more by
              conducting secondary research and sharing the findings.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Sticky notes on Muslim culture"
              src={require("../../../images/ziefahhealth/muslimculture1.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Key Takeaways</>}>
          <>
            <ul>
              <li>
                Mental illness may interpret as a curse or punishment from God therefore receiving
                treatment shows spiritual weakness
              </li>
              <li>
                Many Muslims turn to Imams, faith leaders, to seek help for their mental health
                symptoms but they are not trained mental health professionals and will resort to
                prayer as being adequate
              </li>
              <li>
                There needs to be more Muslim therapists and resources available to the Muslim
                community.
              </li>
            </ul>
          </>
        </ProjectSection>
        <ProjectSection header={<>Bumble Meets Flo</>} isLineHidden={true}>
          <>
            <p>
              Our client was inspired to include two features to be implemented into Ziefah Health.
            </p>
          </>
        </ProjectSection>
        <ProjectSection header={<>1.) Bumble</>} isLineHidden={true}>
          <>
            <p>
              Yes, the dating app. Our client wanted us to implement the swipe feature for when a
              user browses through potential therapist matches. I had my own biases with this
              particular feature being placed in an environment with a more serious connotation.
            </p>
            <p>We downloaded the application, tested it ourselves, and documented for reference.</p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Bumble screenshot"
              src={require("../../../images/ziefahhealth/bumble.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>2.) Flo</>}>
          <>
            <p>
              This application helps women track menstural symptoms. The idea here was to have the
              user log symptoms for personal tracking and to help with the therapist matching
              process.
            </p>
            <p>
              When testing, we enjoyed the interactive AI questioning feature during the onboarding
              process as well as touchpoints of building trust with the user (privacy policy and
              testimonials).
            </p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Bumble screenshot"
              src={require("../../../images/ziefahhealth/flo.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Scope Out the Competition</>}>
          <>
            <p>
              It was important for us to understand search criteria when people were trying to find
              a Muslim therapist. So we dug into some platforms to gain inspiration and learn areas
              of weakness.
            </p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Comparative Analysis"
              src={require("../../../images/ziefahhealth/comparativeanalysis.jpg")}
            />
            <p>
              We also researched and tested out other mobile applications where they had the feature
              of meeting an in house therapist as this was something that the client eventually
              wanted to build out in the future.
            </p>
            <img
              className={css(appStyles.dropShadow, appStyles.threeQuarterWidthProjectImage)}
              alt="Feature inventory"
              src={require("../../../images/ziefahhealth/featureinventory.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Language</>} isLineHidden>
          <>
            <p>
              During our interviews, a participant referenced MuzMatch which is a dating app for
              Muslims. He mentioned that it was tailored to the Muslim community and that we could
              gain insight on language from the app. He really liked how the app had specified tags
              nested within the therapist bios which made it easy to target information he needed in
              order to match with someone.
            </p>
            <p>So of course we tested it out!</p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="MuzMatch screenshot"
              src={require("../../../images/ziefahhealth/muzmatch.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          headerImageName={HeaderNames.Define}
          headerName={<>Define</>}
        />
        <ProjectSection header={<>Meet Yara &amp; Aasim</>}>
          <>
            <p>
              In this project, we wanted to make sure that we considered every detail from the users
              perspective when designing our application. We created 2 proto-personas of two
              possible user groups to better understand how we could design more inclusively.
            </p>
            <p>
              First up is Yara. She represents the targeted user group of being a Muslim youth and
              feeling uncertain about reaching our for mental health help.
            </p>
            <p>★ Please keep Yara in mind as we take you through our design journey ★</p>
            <img
              className={css(
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
              alt="Sebas' persona"
              src={require("../../../images/ziefahhealth/yara.jpg")}
            />
            <p>
              Next up is Aasim. Even though our application would be tailored more for youth, we
              wanted to include possible adults who would use it as well. This is a user who is more
              open to talking about mental health and has had past experience with therapists.
            </p>
            <img
              className={css(
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
              alt="Aasim's persona"
              src={require("../../../images/ziefahhealth/aasim.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Empathizing with Yara</>}>
          <>
            <p>
              To further empathize with the user group, we collaborated and created an empathy map.
              It was a great group activity to share out our views on what the user might be
              thinking, doing, seeing, and feeling.
            </p>
            <img
              className={appStyles.threeQuarterWidthProjectImage}
              alt="Yara's empathy map"
              src={require("../../../images/ziefahhealth/yaraempathymap.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>The Journey</>}>
          <>
            <p>
              Keeping Yara in mind. We continued to build out her persona by creating a user journey
              map to understand her pain points and frustrations when trying to find a Muslim
              therapist through a Google search.
            </p>
            <img
              className={css(
                appStyles.noMarginTop,
                appStyles.fullWidthProjectImage,
                appStyles.noMarginBottom
              )}
              alt="User journey map"
              src={require("../../../images/ziefahhealth/userjourneymap.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Defining the Core Problem</>} isLineHidden={true}>
          <>
            <p>
              Creating and empathizing Yara's persona helped us better understand the problem space.
            </p>
            <div className={appStyles.projectSmallerHeader}>Problem Statement</div>
            <p className={appStyles.noMarginTop}>
              Muslim youth need a better way to find and connect with Muslim therapists to feel
              connected and understood.
            </p>
            <div className={appStyles.projectSmallerHeader}>Solution</div>
            <p className={appStyles.noMarginTop}>
              A mobile application where Muslim youth can express their concerns, feelings, and
              needs so they can find a therapist who's best fit. The application will also provide a
              safe private space where Muslims can connect with their matched therapist via chat or
              video.
            </p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.3}
          headerImageName={HeaderNames.Develop}
          headerName={<>Develop</>}
        />
        <ProjectSection header={<>User Flow</>}>
          <>
            <p>
              We created 2 potential user flows based on the clients business model - a free trial
              and a payment plan. Assuming that a younger user like Yara would be skeptical on
              paying prior to seeing their therapist options, we created a free trial which enables
              users to see their 5 matched therapists along with their bios and introduction video.
              If a user would then like to schedule a free consultation or a full therapy session,
              they would be required to purchase a plan.
            </p>
            <img
              alt="User flow"
              className={css(
                appStyles.noMarginTop,
                appStyles.fullWidthProjectImage,
                appStyles.noMarginBottom
              )}
              src={require("../../../images/ziefahhealth/userflow.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Sketching Solutions</>}>
          <>
            <p>
              Every ideation started off in the lowest fidelity so we could iterate; increase
              efficiency and reduce waste. I sketched out the possible onboarding process of
              including a privacy screen to build trust, teaching the user how the app works, and
              interactive questioning to gain more personal information for the purpose of therapist
              matching.
            </p>
            <img
              className={css(
                appStyles.noMarginTop,
                appStyles.fullWidthProjectImage,
                appStyles.noMarginBottom
              )}
              alt={"Sketches"}
              src={require("../../../images/ziefahhealth/sketches.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Wahoo Wireframes!</>}>
          <>
            <p>
              After deciding the direction of the layout, we created low-mid fidelity wireframes of
              screens the user would see during onboarding and getting matched with therapists.
            </p>
            <p>
              Here would be the screens a user sees when opening up the app for the first time and
              learns about how the app works.{" "}
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Wireframes"}
              src={require("../../../images/ziefahhealth/wireframes.jpg")}
            />
            <p className={appStyles.noMarginTop}>
              Here is what the user would see when going through some interactive questions that ask
              about preferences in order to get matched with suitable therapists.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Wireframes"}
              src={require("../../../images/ziefahhealth/wireframes2.jpg")}
            />
            <p className={css(appStyles.noMarginTop, appStyles.noMarginBottom)}>
              Here is what the user would see when getting matched with therapists. The user is
              instructed to interact with the screen by swiping to browse through the list of the
              therapists and to remove or favorite their options.
            </p>
            <img
              className={css(appStyles.fullWidthProjectImage, appStyles.noMarginBottom)}
              alt={"Wireframes"}
              src={require("../../../images/ziefahhealth/wireframes3.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Moodboard</>} isLineHidden>
          <>
            <p>
              Our colors were inspired by the ocean which sets a calm and relaxing tone through the
              shades of blue. Our goal is for the user to feel a sense of comfortability while going
              through our app, so we thought blue was a great choice. We also decided to go with the
              Ubuntu font which is a more curved and rounded font choice to continue the feel of
              comfortability.
            </p>
            <img
              className={css(appStyles.noMarginTop, appStyles.fullWidthProjectImage)}
              alt={"Moodboard"}
              src={require("../../../images/ziefahhealth/moodboard.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.3}
          headerImageName={HeaderNames.Iterate}
          headerName={<>Iterate</>}
        />
        <ProjectSection header={<>Refine</>} isLineHidden>
          <>
            <p>
              We wanted to ensure the highest quality when developing this application so we decided
              to test our low fidelity prototype to refine prior to building out the higher version.
            </p>
            <p>We completed 4 usability tests asking users to complete the tasks of:</p>
            <ul>
              <li>Onboard as the user Yara</li>
              <li>Select free trial or payment mode</li>
              <li>Create an account</li>
              <li>Favorite a matched therapist based on preferences</li>
              <li>Schedule a free consultation</li>
            </ul>
            <img
              className={appStyles.fullWidthProjectImage}
              style={{
                width: "auto",
              }}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/interview1.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/paymentdetails.jpg")}
            />
            <Ellipsis />
            <img
              className={css(appStyles.noMarginTop, appStyles.fullWidthProjectImage)}
              style={{
                width: "auto",
              }}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/interview2.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/messaging.jpg")}
            />
            <Ellipsis />
            <img
              className={css(appStyles.noMarginTop, appStyles.fullWidthProjectImage)}
              style={{
                width: "auto",
              }}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/interview3.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"Usability interview"}
              src={require("../../../images/ziefahhealth/messaging3.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          headerImageName={HeaderNames.Deliver}
          headerName={<>Deliver</>}
        />
        <ProjectSection header={<>Introducing Ziefah Health</>} isLineHidden={true}>
          <>
            <p>I'd like to introduce our mobile application Ziefah Health.</p>
            <p>
              A place where Muslim youth can find and connect with therapists based on their needs
              and preferences.
            </p>
            <p>
              We've created a safe space for you to talk with people who care about and understand
              what you're going through.
            </p>
            <div className={appStyles.flexibleContainer}>
              <iframe
                title={"Prototype"}
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiQEXe7GhUi5C3GtBiIQovb%2FZiefah-Health%3Fpage-id%3D374%253A10481%26node-id%3D374%253A12077%26viewport%3D241%252C48%252C0.08%26scaling%3Dscale-down%26starting-point-node-id%3D374%253A12077"
                allowFullScreen
              ></iframe>
            </div>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          headerImageName={HeaderNames.TheFuture}
          headerName={<>The Future</>}
        />
        <ProjectSection header={<>Next Steps</>}>
          <>
            <p>
              We're excited to see the future of Ziefah Health! However, there is always room for
              improvement and work to be done within design. Our next steps would be to:
            </p>
            <ul>
              <li>Conduct a second round of usability testing within our targeted user group</li>
              <li>Refine the prototype based on user feedback</li>
              <li>Hand off the final MVP and test report to client</li>
            </ul>
          </>
        </ProjectSection>
        <ProjectSection header={<>Self Reflection</>} isLineHidden>
          <>
            <p>
              It was my first to work in a team environment in a client setting. I've learned and
              grown tremendously as a UX Designer on this project. As I managed communication and
              led meetings, I learned how to maintain a client relationship to ensure boundaries and
              to promote efficiency.
            </p>
            <p>
              Our team was a bit nervous in the beginning of this project as the targeted user group
              for this application was difficult to recruit for user interviews. We pivoted in
              relying heavily on insight from surveys to gain any knowledge on challenges people
              face when pursuing therapy. Our next step would be to run usability testing on Muslim
              youth to gain a true understanding of pain points and frustrations from out targeted
              user group.
            </p>
            <p>
              We did not run into major bumps in the road as our client was fairly easy to work with
              and was very open minded to changes in ideas and direction. It was a pleasure to work
              with the client on this project; it was fun to collaborate and learn from one other.
              Overall, the experience was pleasurable and it was a blast to create something
              impactful. I hope that this application takes off so that it can help raise awareness
              and increase access of mental health services within the Muslim community.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Project team"}
              src={require("../../../images/ziefahhealth/teamphoto.jpg")}
            />
          </>
        </ProjectSection>
      </>
    </ProjectPage>
  );
};
