import React from "react";
import { Ellipsis } from "../../../components/ProjectPage/ellipsis/ellipsis";
import { ProjectPage } from "../../../components/ProjectPage/ProjectPage";
import { ProjectSection } from "../../../components/ProjectPage/ProjectSection/ProjectSection";
import { IProjectDetails } from "../../../components/ProjectPage/ProjectDetailsTable/IProjectDetails";
import { ProjectDetailsTable } from "../../../components/ProjectPage/ProjectDetailsTable/ProjectDetailsTable";
import { ImageHeader } from "../../../components/ProjectPage/ImageHeader/ImageHeader";

import appStyles from "../../../css/App.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { css } from "@fluentui/utilities";

export const NSETropicals = () => {
  const projectDetails: IProjectDetails = {
    team: [
      {
        name: "Me",
        role: "UX/UI Designer",
      },
    ],
    keySkills: [
      "Heuristic Analysis",
      "Usability Testing",
      "Card Sorting",
      "Site Map",
      "Personas",
      "Sketches & Wireframes",
      "High Fidelity Prototype",
    ],
    tools: ["Optimal Workshop", "Figma"],
    timeline: {
      startDate: "December 2021",
      duration: "2 weeks",
    },
  };

  return (
    <ProjectPage
      projectName="NSE Tropicals"
      projectTagline="A redesign of a rare exotic plant e-commerce website."
      projectBackground={require("../../../images/projectheader/nsetropicalsheader.jpg")}
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
              This was one of my earlier projects within a bootcamp setting. Since then my skills as
              a UX Designer have grown tremendously. I will show you my redesign as a beginner
              student as well as my designs towards the end of the bootcamp. Stay tuned to be wowed!
            </p>
          </>
        </ProjectSection>
        <ParallaxBanner
          layers={[
            {
              image: `${require("../../../images/nsetropicals/imageheaders/plantsheader.jpg")}`,
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
              Plant collectors around the world go on the e-commerce website NSE Tropicals to stay
              up to date with market prices, participate in auctions, or to simply fill their void
              with rare planty goodness. I myself have been shopping and supporting this business
              for awhile and I decided to take a stab at redesigning the platform.
            </p>
            <p>
              How might I redesign NSE Tropicals to better the shopping experience for fellow plant
              collectors?
            </p>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/discover.jpg")}
          headerName={<>Discover</>}
        />
        <ProjectSection header={<>My Assumptions</>}>
          <>
            <p>
              I began my redesign process with evaluating the website and performing a heautistic
              analysis. Of course this is based on my assumptions that I would further validate
              through testing. Here are some pain points and frustrations I found based on my
              evaluation.
            </p>
            <img
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
              alt={"Heuristic Evaluation"}
              src={require("../../../images/nsetropicals/heuristiceval2.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Validation</>} isLineHidden>
          <>
            <p>
              Realizing the many issues that I encountered on the site, it was time to validate my
              assumptions through usability testing. I recruited 5 users to perform usability tests.
            </p>
            <ul>
              <li>Gender: 2 male | 3 female</li>
              <li>Age: all in their 20's</li>
              <li>
                Experience: 4 participants have never been on the site | 1 particpant shops on this
                site 3 times a week
              </li>
            </ul>
            <p>
              These tests were done fully remote and I had the participants share their screen as
              they performed these tasks on the website so I could validate my assumptions as well
              as understand further pain points.
            </p>
            <img
              className={css(appStyles.floatRight, appStyles.autoWidthImageNotCentered)}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/ratingsinterview1.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"User feedback"}
              style={{
                maxWidth: 450,
              }}
              src={require("../../../images/nsetropicals/sortby.jpg")}
            />
            <img
              className={appStyles.autoWidthImageNotCentered}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/ratingsinterview2.jpg")}
            />
            <img
              className={css(appStyles.dropShadow, appStyles.autoWidthImage)}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/restocks.jpg")}
            />
            <img
              className={appStyles.autoWidthImageNotCentered}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/restocksinterview.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/testimonialsscreenshot.jpg")}
            />
            <img
              className={appStyles.autoWidthImageNotCentered}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/testimonialsinterview.jpg")}
            />
            <img
              className={appStyles.autoWidthImage}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/welcometothejungle.jpg")}
            />
            <img
              className={appStyles.autoWidthImageNotCentered}
              alt={"User feedback"}
              src={require("../../../images/nsetropicals/welcometothejunglefeedback.jpg")}
            />
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Affinity map"}
              src={require("../../../images/nsetropicals/affinitymap1.jpg")}
            />
            <img
              className={appStyles.fullWidthProjectImage}
              alt={"Affinity Map"}
              src={require("../../../images/nsetropicals/affinitymap2.jpg")}
            />

            <div className={appStyles.projectSmallerHeader}>Problem Statement</div>
            <p>From conducting usability testing I learned that:</p>
            <ul>
              <li>Took users on average roughly 55 seconds to find the book for pre-order</li>
              <li>All 5/5 users missed specifiying gift card method during the checkout process</li>
              <li>All 5/5 users were frustrated with testimonials being not credited</li>
              <li>All 5/5 users were confused on the sort feature of sort by average rating</li>
            </ul>
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/define.jpg")}
          headerName={<>Define</>}
        />
        <ProjectSection header={<>Creating Personas</>}>
          <>
            <p>
              To help me build out personas from real people, I utilized Google surveys and sent
              them out through my plant instagram account. It was the perfect way to get responses
              from people who were into plants!
            </p>
            <p>
              I'd like to introduce "The Collector" who is on the higher end of the spectrum of
              collecting rare plants. She is someone who has targeted goals of purchasing a rare
              wishlist plant, keeping up to date on plant market prices, and participating auctions
              when on NSE Tropicals.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Collector persona"
              src={require("../../../images/nsetropicals/collector.jpg")}
            />
            <p>
              The next is titled as "The Enthusiast."" She is someone who rarely goes on NSE
              Tropicals but has been in the past to order a special plant for a friend and
              pre-ordered a copy of the book "Welcome to the Jungle."
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Enthusiast persona"
              src={require("../../../images/nsetropicals/enthusiast.jpg")}
            />
            <p>
              Most of the users going onto the website fall under the category of "The Collector"
              persona, however it was important that I took into consideration of "The Enthusiast"
              as the pain points anf frustrations were still 100% valid. Taking a step back and
              looking at the perspective as a whole, I was able to redesign the website tailored to
              their feedback.
            </p>
          </>
        </ProjectSection>
        <ProjectSection header={<>Sorting the Navigation</>}>
          <>
            <p>
              During the usability testing, all users were not able to identify that the "Welcome to
              the Jungle" tab in the navigation was the place to pre-order the book as they did not
              know what the book was called. They went straight into the "Shop" tab to try and find
              the book and were confused why they couldn't find it.
            </p>
            <p>
              I then focused on trying to make the navigation more efficient, concise, and
              understandable by performing a card sort. I started with an open card sort to
              understand how users would bucket elements within the existing navigation.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Card sorting"
              src={require("../../../images/nsetropicals/cardsort.jpg")}
            />
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Card sorting"
              src={require("../../../images/nsetropicals/cardsort2.jpg")}
            />
            <p>
              After identifying what the new navigation should look and feel like, I decided to
              validate this through a closed card sorting with new people than the initial sort.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Card sorting"
              src={require("../../../images/nsetropicals/cardsort3.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Site Mapping</>} isLineHidden>
          <>
            <p>
              I was able to validate and gain confidence on my newly redesigned navigation bar and
              footer. This would help users navigate through the website with ease and efficiency,
              which was my ultimate goal. Here I have created site maps of both the navigation bar
              and footer prior to laying out in my wireframes.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="Site map ideas"
              src={require("../../../images/nsetropicals/sitemap.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/develop.jpg")}
          headerName={<>Develop</>}
        />
        <ProjectSection header={<>Initial Sketches &amp; Wireframes</>} isLineHidden>
          <>
            <p>
              As I mentioned earlier, I have since redesigned my redesign. These were a couple of my
              sketches for my initial redesign showcasing the homepage, product listing, and product
              detail pages.
            </p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="sketches"
              src={require("../../../images/nsetropicals/sketches.jpg")}
            />
            <p>I created low fidelity wireframe through Figma based on my sketches.</p>
            <img
              className={appStyles.fullWidthProjectImage}
              alt="wireframes"
              src={require("../../../images/nsetropicals/wireframes.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/iterate.jpg")}
          headerName={<>Iterate</>}
        />
        <ProjectSection header={<>Feedback</>} isLineHidden>
          <>
            <p>
              I was fairly proud of this project as it was my second UX project ever. As I presented
              this iteration to my classmates, I was receiving tons of feedback which at the time
              was dissapointing. I've learned to take this feedback and use it to make my redesign
              so much better. Also please note that during this time in bootcamp we didn't touch
              typography or colors.
            </p>
            <img
              alt="Feedback from classmates"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/nsetropicals/feedback.jpg")}
              style={{
                maxWidth: 420,
                width: "100%",
              }}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/deliver.jpg")}
          headerName={<>Deliver</>}
        />
        <ProjectSection header={<>Welcome to the Jungle</>}>
          <>
            <p>
              My skills have grown tremendously as a visual designer. When I first created the
              redesign, I had no idea what a moodboard was or the importance of typography and
              colors. I decided to go back into this project and create a moodboard for redesigning
              my redesign. I remembered noting that a lot of the users during testing really loved
              being greeted by the dramatic image of the draping leaves and the bold statement
              "Welcome to the Jungle." I decided to keep that theme going.
            </p>
            <img
              alt="Moodboard"
              className={css(appStyles.dropShadow, appStyles.fullWidthProjectImage)}
              src={require("../../../images/nsetropicals/moodboard.jpg")}
            />
          </>
        </ProjectSection>
        <ProjectSection header={<>Redesigning My Redesign</>} isLineHidden>
          <>
            <div className={appStyles.projectSmallerHeader}>Home Page</div>
            <p>
              It's time to finally reveal the pages! I will show you a series of images: left being
              my first version and right being my final redesign. You can clearly see my visual
              progression which I was hesitant to show but I feel that it's important to showcase my
              growth.
            </p>
            <img
              alt="Redesign concepts for home page"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/nsetropicals/homepage.jpg")}
            />
            <div className={appStyles.projectSmallerHeader}>Testimonials</div>
            <p>
              I added names and verified purchase details to the testimonials page which adds a huge
              amount of credability.
            </p>
            <img
              alt="Redesign concepts for testimonials"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/nsetropicals/testimonials.jpg")}
            />
            <div className={appStyles.projectSmallerHeader}>Gift Cards</div>
            <p>
              I added an option where users can specify delivery method of gift card which will
              alleviate user error and faulty delivery.
            </p>
            <img
              alt="Redesign concepts for gift cards"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/nsetropicals/giftcards.jpg")}
            />
            <div className={appStyles.projectSmallerHeader}>Plants</div>
            <p>
              A majority of the survey participants really wanted a better layout of how the plants
              are sorted depending on in and out of stock inventory. I re-organized the items so
              that in stock items always show up at the top. I also have the default sorting as
              "Sort by newest" and two other sorting options of sorting by price.
            </p>
            <img
              alt="Redesign concepts"
              className={appStyles.fullWidthProjectImage}
              src={require("../../../images/nsetropicals/plantsorting.jpg")}
            />
          </>
        </ProjectSection>
        <ImageHeader
          imageOpacity={0.1}
          color="#000"
          imageSrc={require("../../../images/nsetropicals/imageheaders/whatsnext.jpg")}
          headerName={<>What&rsquo;s Next?</>}
        />
        <ProjectSection header={<>Next Steps</>}>
          <>
            <p>I would love to continue to work on this project when time allows. Next, I would:</p>
            <ul>
              <li>Create a high fidelity prototype</li>
              <li>Conduct a second round of usability testing with my final redesign</li>
              <li>Share my redesign with the owner of NSE Tropicals</li>
            </ul>
          </>
        </ProjectSection>
        <ProjectSection header={<>Self Reflection</>} isLineHidden>
          <>
            <p>
              I was seriously so proud of this project initially as it was my second design sprint
              ever. I'm really glad to have taken the feedback that was shared with me and improve
              my design. I can confidently show you and say that I am a stronger visual designer now
              than I was before. It was so awesome to take the short time to redo the pages as I've
              grown.
            </p>
            <p>
              Like I said before, I was super nervous to show you the horrid screens of my first
              rendition. After speaking with my colleague I felt inspired to showcase my
              improvements. It was funny when she mentioned, “you know you became a stronger visual
              designer when you look at your past designs and go oh shit that was bad.” That
              resonated with me as I reflected upon this project.
            </p>
            <p>
              I am a constantly hungry to learn and grow. That's one of the reasons why I decided to
              pursue design. There is always room for improvement in everything you do. Nothing is
              ever "final."
            </p>
          </>
        </ProjectSection>
      </>
    </ProjectPage>
  );
};