import React from "react";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";
import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { IProjectDetails } from "../../../components/ProjectPage/ProjectDetailsTable/IProjectDetails";
import { ProjectDetailsTable } from "../../../components/ProjectPage/ProjectDetailsTable/ProjectDetailsTable";
import { HeaderNames, ImageHeader } from "../../../components/ProjectPage/ImageHeader/ImageHeader";

import appStyles from "../../../css/App.module.scss";
import styles from "./designbysteeze.module.scss";
import { css } from "@fluentui/react/lib/Utilities";
import { VideoPlayer } from "../../../components/ProjectPage/VideoPlayer/VideoPlayer";
import { YellowButton } from "../../../components/YellowButton/YellowButton";

export const DesignBySteeze = () => {
  const projectDetails: IProjectDetails = {
    team: [
      {
        name: "Me",
        role: "UX/UI Designer",
      },
      {
        name: "Husband",
        role: "UX Engineer",
      },
    ],
    keySkills: [
      "Secondary Research",
      "Concept Ideation",
      "Visual Design",
      "High Fidelity Mockup",
      "Design Hand Off",
    ],
    tools: ["Mockup Sketch", "Sketchbook", "Figma"],
    timeline: {
      startDate: "February 2022",
      duration: "2 weeks",
    },
  };

  return (
    <ProjectPage
      projectName="designbysteeze"
      projectTagline="A husband and wife collaboration."
      projectBackground={require("../../../images/projectheader/designbysteeze.jpg")}
      imageOpacity={0.4}
    >
      <>
        <div className={appStyles.videoContainer}>
          <VideoPlayer videoSrc={require("./videos/designbysteezeprototype.mp4")} />
          <YellowButton
            className={appStyles.viewPrototypeButton}
            text={"View Full Prototype"}
            iconProps={{
              imageProps: {
                src: require("../../../images/figma.svg").default,
              },
            }}
            linkTo={
              "https://www.figma.com/proto/gaSY7tumBMCHaDjNF54IUj/Portfolio?page-id=0%3A1&node-id=550%3A326&viewport=241%2C48%2C1&scaling=scale-down&starting-point-node-id=550%3A326"
            }
          />
        </div>
        <ImageHeader
          imageOpacity={0}
          headerImageName={HeaderNames.Background}
          headerName={<>Background</>}
        />
        <div className={appStyles.textSection}>
          <ProjectDetailsTable details={projectDetails} />
        </div>
        <Ellipsis />
        <div className={appStyles.textSection}>
          <div className={styles.introTextContainer}>
            <img src={require("../../../images/designbysteeze/us.jpg")} alt={"My husband and I"} />
            <div className={css(appStyles.bodyText, styles.introText)}>
              <p>
                It was nearing the end of my bootcamp days, which meant that it was time to finally
                build out my portfolio. As my mind raced to decide which website builder and host to
                go with... I decided to consult with my bestfriend, my husband.
              </p>
              <p>"Wait, why pay for Squarespace when you have me?"</p>
              <p>
                Honestly, it didn't really come to mind until he mentioned it. He further clarified,
                "you design it, I can build it."
              </p>
              <p>
                Oh boy! We've been together for almost 7 years and this was our first test working
                together in a professional space.
              </p>
            </div>
          </div>
        </div>
        <ImageHeader
          imageOpacity={0.3}
          imageSrc={require("../../../images/designbysteeze/imageheaders/thebirdofparadise.jpg")}
          headerName={
            <>
              <div>Iteration 1</div>
              <div>The Bird of Paradise</div>
            </>
          }
        />
        <ProjectSection header={<>&ldquo;The Hiring Manager&rdquo;</>}>
          <>
            <div>
              I read an interesting article during my bootcamp days that provided so much insight on
              potential user groups who would swing by and skim our portfolios. I decided to build a
              proto-persona to help remind me of the user group looking through my portfolio.
            </div>
            <img
              className={css(appStyles.fullWidthProjectImage, appStyles.noMarginBottom)}
              alt={"Persona details"}
              src={require("../../../images/designbysteeze/persona1.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>The Perfect Layout</>}>
          <>
            <div>
              It was my first time creating a UX portfolio from scratch so I began my journey with
              conducting secondary research. I knew I wanted to create a clean, simple, and crisp
              look so users could navigate through my portfolio with ease and efficiency. Looking
              through countless number of portfolios, I stumbled across these 4 cards and
              immediately felt that this was the one.
            </div>
            <img
              className={appStyles.smallerWidthProjectImage}
              alt={"Card sorting"}
              src={require("../../../images/designbysteeze/cards1.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>To the Drawing Board</>}>
          <>
            <div>
              For visuals, it was important that I captured the users attention. So my vision was to
              utilize the vast white space and add pops of color to direct the users focus. My
              vision was to incorporate shades of green to portray my love for plants.
            </div>
            <div>
              <p>
                Even though it felt silly to do for my own portfolio, I sketched out the pages to
                help me visualize the layout of each page.
              </p>
            </div>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="drawing board"
              src={require("../../../images/designbysteeze/drawingboard.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Bird of Paradise</>}>
          <>
            <p>
              I started looking for more inspiration but this time rather than browsing UX
              portfolios, I browsed colors.
            </p>
            <p>
              I had recently changed and fell in love with the background color of my LinkedIn
              profile photo - HEX<span style={{ color: "#CCDB38" }}>#CCDB38</span>, to be exact. One
              of my favorite things I love and can do for hours is to run the color generator in
              coolors.io. I ran this obsessive neon green and mashed the space bar until I found the
              perfect match.
            </p>
            <div className={styles.selfieContainer}>
              <img src={require("../../../images/designbysteeze/selfie.jpg")} alt="myself" />
            </div>
            <p>
              I struck gold! Finding this neon purple that suited the green made my heart jump up
              and down. It reminded me of the beautiful flower, the Bird of Paradise that bloomed in
              the tropics. I went onto finding more inspiration and came up with a moodboard that
              captured my personality of radiating positive energy.
            </p>
            <p>
              Typography was also incredibly an important aspect to consider. Crimson Text brought a
              serious tone while the Work Sans balanced it out with softness through its rounded
              edges.
            </p>
            <img
              className={css(appStyles.dropShadow, appStyles.smallerWidthProjectImage)}
              alt="moodboard"
              src={require("../../../images/designbysteeze/moodboard.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>What Do You Think?</>}>
          <img
            className={css(
              appStyles.fullWidthProjectImage,
              appStyles.noMarginTop,
              appStyles.noMarginBottom
            )}
            alt={"Feedback from classmates"}
            src={require("../../../images/designbysteeze/whatdoyouthink.jpg")}
          />
        </ProjectSection>
        <ProjectSection header={<>Develop?</>} isLineHidden>
          <>
            <p>Hold your horses. Not quite yet.</p>
            <p>
              I was receiving solid constructive feedback from my fellow colleagues on the first
              rendition of my portfolio. However, constant collaboration with my husband helped push
              me to challenge myself in creating something further complex.
            </p>
            <p>
              My portfolio felt simple to navigate, yet it lacked depth and it didn't fully capture
              my creativity...
            </p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.2}
          headerImageName={HeaderNames.Define}
          headerName={
            <>
              <div>Iteration 2</div>
              <div>The Dahlia</div>
            </>
          }
        />
        <ProjectSection header={<>Back to the Drawing Board</>}>
          <>
            <p>
              My husband knew that I was struggling with my portfolio design. He wasn't a designer
              himself so he didn't have much to say when I seeked direction. However, he did give me
              several pointers that were incredibly important for my second iteration.
            </p>
            <img
              className={css(
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
              alt={"Conversation between me and my husband"}
              src={require("../../../images/designbysteeze/convo.jpg")}
            />
            <p>
              As you can read, working with a developer has helped me consider points of design that
              I've never thought about before; these are lessons or skills you don't learn in
              bootcamp. That perspective shed so much light into my work.
            </p>
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
              I'm not huge on flowers but the Dahlia has my heart. It is native to Mexico and
              Central America and it's relative to the sunflower, daisy, and chrysanthemum. Dahlias
              add so much dimension through colors and petal formation. This second style tile was
              heavily influenced by them.
            </p>
            <img
              className={css(
                appStyles.dropShadow,
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
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
              className={css(
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
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
              className={css(
                appStyles.fullWidthProjectImage,
                appStyles.noMarginTop,
                appStyles.noMarginBottom
              )}
              alt="Responsive designs for portfolio"
              src={require("../../../images/designbysteeze/responsive2.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>I Am Human</>} isLineHidden>
          <>
            <p>
              Be sure to check out my "About" section to learn more about me as a human being. It
              was incredibly important for me to showcase that I am not constantly a working robot
              but that I am a human being just like you.
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
              className={css(appStyles.fullWidthProjectImage, appStyles.noMarginTop)}
              src={require("../../../images/designbysteeze/iamhuman.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0}
          headerImageName={HeaderNames.TheFuture}
          headerName={<>The Future</>}
        />
        <ProjectSection isLineHidden={true}>
          <>
            <p className={appStyles.noMarginTop}>
              As I constantly am growing as a UX Designer, I'll be constantly evolving my portfolio.
              For now, I am happy where it's at and what it's become through incoporating my vision
              and feedback into my iterations. It was truly a rewarding experience to see my designs
              come to life... page by page.
            </p>
            <p>
              It was an incredible opportunity to collaborate with a developer. No, we didn't argue
              one bit during the process which made it a very pleasant experience. Moving forward, I
              plan to study more on responsive designs and what other aspects I should consider when
              designing more complex sites and features. There is always room for improvement and I
              look forward to working with all types of developers to strengthen my skills in
              collaboration.
            </p>
            <p>
              For now, I hope you enjoyed the "final" version of my portfolio.
              <p>Hannah and Eddie out (mic drop).</p>
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Portfolio"}
              src={require("../../../images/designbysteeze/workingtogether.jpg")}
            />
          </>
        </ProjectSection>
      </>
    </ProjectPage>
  );
};
