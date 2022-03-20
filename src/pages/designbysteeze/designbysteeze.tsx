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
import { ImageTextSideBySide } from "../../components/ProjectPage/ImageTextSideBySide/ImageTextSideBySide";

export const DesignBySteeze: React.FC = () => {
  const ProjectSectionBG = "rgba(255, 244, 236, 0.4)";

  return (
    <ProjectContainer>
      <ProjectIntro
        projectName="designbysteeze"
        subtitle="A husband and wife collaboration."
        headerImage={
          <div className="max-w-6xl mt-16 mb-4 self-center">
            <img src={require("./images/designbysteeze_header.png")} alt="Ziefah Health preview" />
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
            items: ["Husband, UX Engineer"],
          },
          {
            header: "Tools",
            items: ["Mockup - Sketch UI & UX", "Figma"],
          },
          {
            header: "Project Duration",
            items: ["March 2022", "2 Weeks"],
          },
        ]}
      />
      <PageSection backgroundColor={ProjectSectionBG}>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Background">
          <ImageTextSideBySide
            imageSrc={require("./images/me_and_ed.png")}
            altText="My husband and I working"
            textContent={
              <>
                <div>
                  It was nearing the end of my bootcamp days, which meant that it was time to
                  finally build out my portfolio. As my mind raced to decide which website builder
                  and host to go with... I decided to consult with my bestfriend, my husband.
                </div>
                <div>&ldquo;Wait, why pay for Squarespace when you have me?&rdquo;</div>
                <div>Oh yeah... my husband makes websites. Duh!</div>
                <div>
                  We've been together for almost 7 years and this would be our first test working
                  together in a professional space.
                </div>
              </>
            }
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Challenge">
          How might a husband and wife collaborate to create something beautiful?
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Solution">
          I learned how to work with a UX Engineer to create my portfolio (the one you&rsquo;re on
          right now at this very moment).
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Iteration 1</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Inspiration">
          <ImageTextSideBySide
            imageSrc={require("./images/inspo.jpg")}
            altText="One of my project inspiration websites"
            textContent={
              <>
                <div>
                  I looked at hundreds of portfolios to gain inspiration before I found the one.
                </div>
                <div>
                  I was inspired by the use of real life images to showcase projects as well as the
                  parallax effect to support the story telling.
                </div>
              </>
            }
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Collaborate">
          <div className="flex sm:space-x-8">
            <div className="items-center basis-1/3 hidden sm:flex">
              <img
                className="max-w-[250px]"
                src={require("./images/memojieddie.png")}
                alt="Memoji of my husband"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center basis-2/3 sm:space-y-4">
              <div>
                <img src={require("./images/chatbubble.png")} alt="Feedback from husband" />
              </div>
              <div className="sm:self-center">
                <img src={require("./images/chatbubble1.png")} alt="Feedback from husband" />
              </div>
              <div className="sm:self-end">
                <img src={require("./images/chatbubble2.png")} alt="Feedback from husband" />
              </div>
              <div className="sm:self-center">
                <img src={require("./images/chatbubble3.png")} alt="Feedback from husband" />
              </div>
              <div>
                <img src={require("./images/chatbubble4.png")} alt="Feedback from husband" />
              </div>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Persona">
          I read an interesting article that highlighted several pointers for what a hiring manager
          looks for in a portfolio within a 5 minute time frame. After speaking with other UX
          Designers in the field, I decided to create a real life persona of the targeted user.
          <img
            src={require("./images/persona.jpg")}
            alt="Hiring manager persona"
            className="my-8 shadow-md"
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Moodboard">
          I wanted my brand to look and feel elegant, modern, and sleek. The dahlia is my favorite
          and inspired me to incorporate it into the theme of my portfolio. I created a moodboard to
          help me think through the layout of my design.
          <img
            src={require("./images/moodboard.jpg")}
            alt="Hiring manager persona"
            className="my-8 shadow-md max-w-[900px] w-full mx-auto"
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Mockups">
          <div>
            I then designed high-fidelity mockups in Figma with annotations to hand off to my
            husband along with assets.
          </div>
          <div className="flex space-x-16 my-8 justify-between">
            <Zoom>
              <div>
                <img
                  className="shadow-md"
                  src={require("./images/web1.jpg")}
                  alt="Figma mockup of my website"
                />
              </div>
            </Zoom>
            <Zoom>
              <div>
                <img
                  className="shadow-md"
                  src={require("./images/web2.jpg")}
                  alt="Figma mockup of my website"
                />
              </div>
            </Zoom>
          </div>
          <div className="mb-4">
            Most users are more likely going to be on the computer when going through my portfolio.
            However, for designing inclusive and to help challenge myself I created mockups for
            mobile responsiveneness.
          </div>
          <div className="mb-4">Here&rsquo;s what I did different:</div>
          <ul className="list-disc list-inside">
            <li>
              Moved the header image so there wouldn&rsquo;t be a contrast issue (white text on
              white background)
            </li>
            <li>
              Added buttons as there is no such thing as “hover state” when on a mobile device
            </li>
            <li>Created a hamburger menu for navigation</li>
          </ul>
          <div className="flex justify-center mt-8 sm:space-x-32">
            <Zoom>
              <div>
                <img
                  className="max-w-[250px] shadow-md"
                  src={require("./images/mobile.png")}
                  alt="Figma mobile mockup of my website"
                />
              </div>
            </Zoom>
            <Zoom>
              <div>
                <img
                  className="max-w-[250px] shadow-md"
                  src={require("./images/mobile2.png")}
                  alt="Figma mobile mockup of my website"
                />
              </div>
            </Zoom>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Feedback">
          <div>
            It was critical for me to gain insights on what users saw and felt when coming to check
            out my portfolio. I asked Creative Directors, Senior UX Designers, and Hiring Managers
            to take a look at my portfolio to provide any overall feedback and suggestions.
          </div>
          <div className="flex flex-col">
            <div>
              <img src={require("./images/feedback1.png")} alt="Feedback on portfolio" />
            </div>
            <div className="self-end">
              <img src={require("./images/feedback2.png")} alt="Feedback on portfolio" />
            </div>
            <div>
              <img src={require("./images/feedback3.png")} alt="Feedback on portfolio" />
            </div>
            <div className="self-end">
              <img src={require("./images/feedback4.png")} alt="Feedback on portfolio" />
            </div>
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Iteration 2</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Realization">
          <div className="mb-4">
            I agreed 100% with the feedback that was shared with me. I reflected on the persona I
            created at the beginning of this project. I reminded myself of this quote
            &ldquo;designers are not making user-centered portfolios, they are making self-centered
            portfolios.&rdquo;
          </div>
          <div>
            I realized that I was caught up on creating a portfolio tailored to my likings and my
            wants when I needed to create my portfolio tailored to the user AKA the hiring manager.
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Sketches">
          <div>
            I then started ideating on ways I could showcase my work with focusing on making it easy
            to pin point information with high level details.
          </div>
          <div className="flex justify-center items-center space-x-8 my-8">
            <div>
              <img
                className="shadow-md"
                src={require("./images/homepagesketch.jpg")}
                alt="Home page sketch"
              />
            </div>
            <div>
              <img
                className="shadow-md"
                src={require("./images/aboutpagesketch.jpg")}
                alt="About page sketch"
              />
            </div>
            <div>
              <img
                className="shadow-md"
                src={require("./images/projectsketch.jpg")}
                alt="Project page sketch"
              />
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Responsive Designs">
          <div>
            I created 3 high fidelity mockup designs for mobile, tablet, and desktop to keep on the
            go users in mind.
          </div>
          <div className="flex justify-center items-center space-x-8 my-8">
            <div>
              <img
                className="shadow-md"
                src={require("./images/iphonedesign.jpg")}
                alt="iPhone responsive design"
              />
            </div>
            <div>
              <img
                className="shadow-md"
                src={require("./images/ipaddesign.jpg")}
                alt="iPad resposive design"
              />
            </div>
            <div>
              <img
                className="shadow-md"
                src={require("./images/desktopdesign.jpg")}
                alt="Desktop responsive design"
              />
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Accessibility">
          <div className="mb-4">
            I ran the Accessabilty Contrast Checker plugin to ensure all pages met WCAG&rsquo;s AAA
            level of compliance.
          </div>
          <div>
            I also designed focus states for users who solely rely on keyboards to navigate a site.
          </div>
          <div className="flex justify-center items-center space-x-8 my-8">
            <div>
              <img
                className="shadow-md"
                src={require("./images/a11ycheck.png")}
                alt="A11y color contrast checker"
              />
            </div>
            <div>
              <img
                className="shadow-md"
                src={require("./images/interactionstates.png")}
                alt="Interaction states"
              />
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Design Hand Off">
          <ImageTextSideBySide
            imageSrc={require("./images/redlines.png")}
            altText="Final redlines"
            textContent={
              <>
                <div>
                  Although my husband and I collaborated mostly in person, I annotated my designs
                  and saved all the assets so he had everything he needed to design my portfolio.
                </div>
              </>
            }
          />
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Reflection</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText={"Looking Back"}>
          <div className="mb-4">
            As I constantly am growing as a UX Designer, I&rsquo;ll be constantly evolving my
            portfolio. For now, I am proud of what it has become through iterations incorporating
            feedback. It was truly a rewarding experience to see my designs come to life page by
            page.
          </div>
          <div className="mb-4">
            It was incredible to have the opportunity to collaborate with an engineer, especially my
            husband. I look forward to working with all types of developers in the future to learn
            various styles and preferences in terms of design hand off.
          </div>
          <div>I hope you enjoyed learning about the creation of designbysteeze.com.</div>
        </PageParagraph>
      </PageSection>
    </ProjectContainer>
  );
};
