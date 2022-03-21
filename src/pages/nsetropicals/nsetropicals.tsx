import React from "react";

import Zoom from "react-medium-image-zoom";
import { Icon } from "@fluentui/react";

import { HeaderSize, HeaderText } from "../../components/ProjectPage/HeaderText/headertext";
import { ProjectContainer } from "../../components/ProjectPage/ProjectContainer/projectcontainer";
import { ProjectDetailsTable } from "../../components/ProjectPage/ProjectDetailsTable/projectdetailstable";
import { ProjectIntro } from "../../components/ProjectPage/ProjectIntro/projectintro";
import { PageParagraph } from "../../components/PageComponents/PageParagraph/PageParagraph";
import { PageSection } from "../../components/PageComponents/ProjectSection/projectsection";
import { PrototypeFrame } from "../../components/ProjectPage/PrototypeFrame/prototypeframe";
import { InsightsElem } from "../../utilities/htmlTemplates";
import { LOG_EVENT } from "../../utilities/tracking";

export const NSETropicals: React.FC = () => {
  const ProjectSectionBG = "rgba(248, 255, 232, 0.4)";

  return (
    <ProjectContainer>
      <ProjectIntro
        projectName="NSE Tropicals"
        subtitle="A redesign of a rare exotic plant e-commerce website."
        headerImage={
          <div className="max-w-6xl my-16 self-center">
            <img src={require("./images/nse_header.jpg")} alt="Ziefah Health preview" />
          </div>
        }
      />
      <ProjectDetailsTable
        tables={[
          {
            header: "My Role",
            items: ["UX Research", "UX/UI Design"],
          },
          {
            header: "Team",
            items: ["Solo"],
          },
          {
            header: "Tools",
            items: ["Optimal Workshop", "Figma"],
          },
          {
            header: "Project Duration",
            items: ["December 2021", "2 Weeks"],
          },
        ]}
      />
      <PageSection backgroundColor={ProjectSectionBG}>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Background">
          Plant collectors around the world go on the e-commerce website NSE Tropicals to stay up to
          date with market prices, participate in auctions, or to simply fill their void with rare
          planty goodness. I myself have been shopping and supporting this business for many years
          so I decided to redesign the platform.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Challenge">
          How might I better the shopping experience for fellow plant collectors on NSE Tropicals?
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Solution">
          <div className="mb-4">
            I redesigned the navigation system, inventory sort feature, testimonials page, and shop.
          </div>
          <div className="mb-4">
            Check out the clickable prototype below or click{" "}
            <a
              className="text-link"
              href="https://www.figma.com/proto/9Tooj3JeRoRDX8vpUHPKuO/NSE-Tropicals-Prototype?page-id=430%3A615&node-id=430%3A625&viewport=241%2C48%2C0.52&scaling=scale-down&starting-point-node-id=430%3A625"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                LOG_EVENT(
                  "Links",
                  "NSE Tropicals Prototype",
                  "NSE Tropicals Prototype link clicked"
                )
              }
            >
              here
            </a>{" "}
            to be redirected.
          </div>
          <PrototypeFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9Tooj3JeRoRDX8vpUHPKuO%2FNSE-Tropicals-Prototype%3Fpage-id%3D430%253A615%26node-id%3D430%253A625%26viewport%3D241%252C48%252C0.52%26scaling%3Dscale-down%26starting-point-node-id%3D430%253A625" />
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Discover</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Heuristic Analysis">
          I began my redesign process with evaluating the original website and performed a heuristic
          analysis. Here are some of the pain points and frustrations I found.
          <div className="flex mx-auto my-8 max-w-4xl">
            <Zoom>
              <img
                className="w-full"
                src={require("./images/heuristicanalysis.png")}
                alt="Heuristic Analysis"
              />
            </Zoom>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Primary Research">
          Realizing the many issues that I encountered on the website, I recruited 5 users to
          perform usability tests to validate my assumptions.
          <div className="flex flex-col mt-8 sm:flex-row sm:space-x-28">
            <PageParagraph headerSize={HeaderSize.small} headerText="User Interviews">
              <ul className="list-disc list-outside ml-4">
                <li>Method: Remote, ZOOM</li>
                <li>Participants: 2 Male, 3 Female</li>
                <li>Age: 20's</li>
                <li>Experience: 4 new to site, 1 goes on the site 3x a week</li>
                <li>Duration: 30 mins</li>
              </ul>
            </PageParagraph>
            <PageParagraph headerSize={HeaderSize.small} headerText="Tasks">
              <ul className="list-disc list-outside ml-4">
                <li>Find information about the site</li>
                <li>Pre-order a copy of the book</li>
                <li>Purchase a gift card</li>
                <li>Find reviews of products</li>
                <li>Sort shop items by average rating</li>
              </ul>
            </PageParagraph>
          </div>
          <div className="flex">
            <img
              src={require("./images/ratingsfeedback.jpg")}
              alt="Feedback on ratings for products"
            />
          </div>
          <div className="flex justify-end mb-16">
            <img
              src={require("./images/restocksfeedback.jpg")}
              alt="Feedback on restocks for products"
            />
          </div>
          <div className="flex mb-16">
            <img
              src={require("./images/testimonialsfeedback.jpg")}
              alt="Feedback on testimonials for products"
            />
          </div>
          <div className="flex justify-end">
            <img
              src={require("./images/bookfeedback.jpg")}
              alt="Feedback on the book in the shop"
            />
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Research Synthesis">
          I transcribed the interview notes into Miro and then I synthesized my findings into
          digestible information.
          <div className="flex mt-8">
            <div>
              <img
                className="h-full"
                src={require("./images/affinitymap1.jpg")}
                alt="Affinity map"
              />
            </div>
            <div>
              <img
                className="h-full"
                src={require("./images/affinitymap2.jpg")}
                alt="Affinity map"
              />
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Key Takeaways">
          All the users were able to complete all the tasks although they did run into some pain
          points and frustrations along the way. Besides the negative pointers, users seemed to have
          liked the overall feel of the landing page.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Insights to Validations">
          <div className="flex flex-col items-center">
            <div className="space-y-6 sm:space-y-0">
              {InsightsElem(
                require("./images/bookmemoji.jpg"),
                "Took users on average roughly 55 seconds to find the book for pre-order.",
                "Validation: Welcome to the Jungle in navigation is confusing."
              )}
              {InsightsElem(
                require("./images/giftcardmemoji.jpg"),
                "5/5 users missed specifiying gift card method during the checkout process",
                "Validation: Instruction of noting physical vs e-gift care might be missed when adding to cart."
              )}
              {InsightsElem(
                require("./images/testimonialsmemoji.jpg"),
                "5/5 users were frustrated with testimonials not being credited.",
                "Validation: Testimonials page is not credited."
              )}
              {InsightsElem(
                require("./images/ratingsmemoji.png"),
                "5/5 users were confused on the sort feature of sort by average rating.",
                "Validation: Sorting option of Sort by average rating but there is no rating or review system."
              )}
            </div>
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Define</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Personas">
          <div className="mb-4">
            I built out real life personas by utilizing Google surveys and sending them out through
            my plant instagram account. It was the perfect way to get responses from fellow plant
            collectors.
          </div>
          <div className="mb-4">
            Most users will fall under this first persona as they mostly go onto NSE Tropicals to
            purchase a rare plant, keep up to date on plant market prices, and participate in
            auctions.
          </div>
          <img
            className="mx-auto shadow-md"
            src={require("./images/collecterpersona.jpg")}
            alt="Jennifer Huang the collector persona"
          />
          <div className="my-8">This next persona represnts users who rarely go on this site.</div>
          <img
            className="mx-auto shadow-md"
            src={require("./images/enthusiastpersona.jpg")}
            alt="Emily Lee the enthusiast persona"
          />
        </PageParagraph>
        <div className="mb-8">
          <HeaderText headerSize={HeaderSize.medium}>Define</HeaderText>
        </div>
        <PageParagraph headerSize={HeaderSize.small} headerText="Problem Statement">
          Plant shoppers need an organized and easier way to find, navigate, and shop for collector
          plants on NSE Tropicals.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Solution">
          Redesign NSE Tropicals to provide a better shopping experience by improving site
          organization, adding credability to testimonials, and optimizing inventory sorting.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Develop</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Card Sorting">
          <div className="mb-4">
            During the usability testing, all users were not able to associate &ldquo;Welcome to the
            Jungle&rdquo; as the book for pre-order. They were hoping that they would find the book
            under &ldquo;Shop&rdquo; where it was no where to be found.
          </div>
          <div className="mb-4">
            I wanted to redesign the navigation to be more consistent with standards so I first
            performed an open card sort to understand how users group elements within the navigation
            system.
          </div>
          <div className="mb-8">
            <Zoom>
              <img
                className="shadow-md"
                src={require("./images/opencardsort.png")}
                alt="Open card sort diagram"
              />
            </Zoom>
          </div>
          <Zoom>
            <img
              className="shadow-md"
              src={require("./images/opencardsortaffinitymap.png")}
              alt="Card sort affinity map"
            />
          </Zoom>
          <div className="my-8">
            After identifying what the new navigation should look and feel like, I decided to
            validate this through a closed cart sort with new participants.
          </div>
          <img
            className="shadow-md"
            src={require("./images/closedcardsort.png")}
            alt="Closed card sort"
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Site Map">
          <div className="mb-4">
            After finalizing how I wanted to group my navigation elements, I created site maps to
            help me layout my redesign.
          </div>
          <div className="flex items-center space-x-8">
            <div className="basis-5/12">
              <img
                className="shadow-md"
                src={require("./images/navigationbar.png")}
                alt="Navigation site map"
              />
            </div>
            <div className="basis-7/12">
              <img
                className="shadow-md"
                src={require("./images/footer.png")}
                alt="Footer site map"
              />
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Moodboard">
          <div className="mb-4">
            This moodboard was inspired by the users during testing. They mentioned really loving
            the dark jungle feel as they scrolled through the landing page so I decided to continue
            that feel in my redesign.
          </div>
          <img className="shadow-md" src={require("./images/moodboard.jpg")} alt="Moodboard" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Sketches">
          <div className="mb-4">
            These are my initial sketches showcasing my ideas for the landing, shop, and product
            pages.
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex-1 basis-1/3 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/home-sketch.png")}
                  alt="Homepage sketch"
                />
              </Zoom>
            </div>
            <div className="flex-1 basis-2/3 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/product-sketch.png")}
                  alt="Product page"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Wireframes">
          <div className="mb-4">From my sketches, I created low-fidelity wireframes.</div>
          <div className="mb-4">
            This first set of wireframes are based on my initial sketched design.
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/home-wireframe2.png")}
                  alt="Homepage wireframe"
                />
              </Zoom>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/shop-wireframe2.png")}
                  alt="Homepage wireframe"
                />
              </Zoom>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/product-wireframe2.png")}
                  alt="Homepage wireframe"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Iterate</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Feedback">
          <div className="mb-8">
            After presenting my initial redesign to fellow colleagues and receiving design critique,
            I took some time to strengthen my redesign.
          </div>
          <div className="flex lg:-mb-16">
            <img src={require("./images/feedback1.png")} alt="Feedback on redesign" />
          </div>
          <div className="flex justify-end">
            <img src={require("./images/feedback2.png")} alt="Feedback on redesign" />
          </div>
        </PageParagraph>
        <div className="mb-8">
          <HeaderText headerSize={HeaderSize.medium}>Second Iteration</HeaderText>
        </div>
        <PageParagraph headerSize={HeaderSize.small} headerText="Wireframes">
          <div className="mb-4">
            Created these second set of wireframes to set the foundation for my new redesign.
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/home-wireframe.png")}
                  alt="Homepage wireframe"
                />
              </Zoom>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/testimonials-wireframe.png")}
                  alt="Testimonials wireframe"
                />
              </Zoom>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/shop-wireframe.png")}
                  alt="Shop wireframe"
                />
              </Zoom>
            </div>
          </div>
          <div className="my-16">
            I feel the importance of showcasing my growth as a UX Designer. I will show you a series
            of images, the left one being my initial design during boot camp and the right one being
            after graduating from boot camp.
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Landing Page">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/homepage-before.jpg")}
                  alt="Before designs for landing page"
                />
              </Zoom>
            </div>
            <Icon className="text-2xl mx-4 self-center sm:mx-8" iconName="Forward" />
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/homepage-after.jpg")}
                  alt="After designs for landing page"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Testimonials">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/testimonials-before.jpg")}
                  alt="Before designs for testimonials"
                />
              </Zoom>
            </div>
            <Icon className="text-2xl mx-4 self-center sm:mx-8" iconName="Forward" />
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/testimonials-after.jpg")}
                  alt="After designs for testimonials"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Gift Cards">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/giftcards-before.jpg")}
                  alt="Before designs for giftcards"
                />
              </Zoom>
            </div>
            <Icon className="text-2xl mx-4 self-center sm:mx-8" iconName="Forward" />
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/giftcards-after.jpg")}
                  alt="After designs for giftcards"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Shop">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/shop-before.jpg")}
                  alt="Before designs for shop"
                />
              </Zoom>
            </div>
            <Icon className="text-2xl mx-4 self-center sm:mx-8" iconName="Forward" />
            <div className="flex-1 flex flex-col justify-center">
              <Zoom>
                <img
                  className="w-full h-full shadow-md"
                  src={require("./images/shop-after.jpg")}
                  alt="After designs for shop"
                />
              </Zoom>
            </div>
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Deliver</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Prototype">
          <div className="mb-4">
            I hope it was satisfying to see my growth in visual design as it was for me!
          </div>
          <div className="mb-4">
            Check out the clickable prototype below or click{" "}
            <a
              className="text-link"
              href="https://www.figma.com/proto/9Tooj3JeRoRDX8vpUHPKuO/NSE-Tropicals-Prototype?page-id=430%3A615&node-id=430%3A625&viewport=241%2C48%2C0.52&scaling=scale-down&starting-point-node-id=430%3A625"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                LOG_EVENT(
                  "Links",
                  "NSE Tropicals Prototype",
                  "NSE Tropicals Prototype link clicked"
                )
              }
            >
              here
            </a>{" "}
            to be redirected.
          </div>
          <PrototypeFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9Tooj3JeRoRDX8vpUHPKuO%2FNSE-Tropicals-Prototype%3Fpage-id%3D430%253A615%26node-id%3D430%253A625%26viewport%3D241%252C48%252C0.52%26scaling%3Dscale-down%26starting-point-node-id%3D430%253A625" />
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Reflection</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Next Steps">
          <div className="mb-4">
            I would love to continue to work on this project if and when time allows.
          </div>
          <div>Next, I would:</div>
          <ul className="list-disc list-outside ml-4">
            <li>Conduct a second round of usability testing with my high-fidelity prototype</li>
            <li>Share my redesign with the owner of NSE Tropicals</li>
          </ul>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Looking Back">
          <div className="mb-4">
            I was seriously so proud of this project initially as it was my second design sprint
            ever. I'm really glad to have taken and utilized the feedback from my colleagues to
            improve my design. I can confidently show and say that I am a stronger visual designer
            now than I was before.
          </div>
          <div className="mb-4">
            I was a bit nervous to show you the horrid screens of my first rendition. After speaking
            with one of my friends, I felt inspired to showcase my improvements. She mentioned, “you
            know you became a stronger visual designer when you look at your past designs and go oh
            shit that was bad.” That resonated with me as I reflected upon this project.
          </div>
          <div className="mb-4">
            I am constantly hungry to learn and grow. That's one of the reasons why I decided to
            pursue design.
          </div>
          <div className="mb-8">
            There is always room for improvement in everything you do. Nothing is ever "final."
          </div>
        </PageParagraph>
      </PageSection>
    </ProjectContainer>
  );
};
