import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Zoom from "react-medium-image-zoom";

import { HeaderSize, HeaderText } from "../../components/ProjectPage/HeaderText/headertext";
import { ProjectContainer } from "../../components/ProjectPage/ProjectContainer/projectcontainer";
import { ProjectDetailsTable } from "../../components/ProjectPage/ProjectDetailsTable/projectdetailstable";
import { ProjectIntro } from "../../components/ProjectPage/ProjectIntro/projectintro";
import { PageParagraph } from "../../components/PageComponents/PageParagraph/PageParagraph";
import { PageSection } from "../../components/PageComponents/ProjectSection/projectsection";
import { PrototypeFrame } from "../../components/ProjectPage/PrototypeFrame/prototypeframe";
import { Icon } from "@fluentui/react";

export const ZiefahHealth: React.FC = () => {
  const ProjectSectionBG = "#f6f8ff";

  const onboardingCarousel: {
    imgSrc: string;
    altText: string;
  }[] = [
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide1.png"),
      altText: "App screenshot for onboarding",
    },
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide2.png"),
      altText: "App screenshot for onboarding",
    },
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide3.png"),
      altText: "App screenshot for onboarding",
    },
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide4.png"),
      altText: "App screenshot for onboarding",
    },
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide5.png"),
      altText: "App screenshot for onboarding",
    },
    {
      imgSrc: require("./images/firstTimeUserCarousel/slide6.png"),
      altText: "App screenshot for onboarding",
    },
  ];
  const questionsCarousel: {
    imgSrc: string;
    altText: string;
  }[] = [
    {
      imgSrc: require("./images/questionsCarousel/slide1.png"),
      altText: "App screenshot for user questionaire",
    },
    {
      imgSrc: require("./images/questionsCarousel/slide2.png"),
      altText: "App screenshot for user questionaire",
    },
    {
      imgSrc: require("./images/questionsCarousel/slide3.png"),
      altText: "App screenshot for user questionaire",
    },
    {
      imgSrc: require("./images/questionsCarousel/slide4.png"),
      altText: "App screenshot for user questionaire",
    },
    {
      imgSrc: require("./images/questionsCarousel/slide5.png"),
      altText: "App screenshot for user questionaire",
    },
  ];

  return (
    <ProjectContainer>
      <ProjectIntro
        projectName="Ziefah Health"
        subtitle="A mobile application where Muslim youth can find and connect with Muslim therapists."
        headerImage={
          <div className="max-w-6xl self-center">
            <img src={require("./images/ziefah_header.jpg")} alt="Ziefah Health preview" />
          </div>
        }
      />
      <ProjectDetailsTable
        tables={[
          {
            header: "My Role",
            items: ["Planning Lead", "Client POC", "UX Research", "UX/UI Design"],
          },
          {
            header: "Team",
            items: ["Spencer, UX Designer", "Jordy, UX Designer"],
          },
          {
            header: "Tools",
            items: ["Miro", "Trello", "Figma"],
          },
          {
            header: "Project Duration",
            items: ["February 2022", "2.5 Weeks"],
          },
        ]}
      />
      <PageSection backgroundColor={ProjectSectionBG}>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Background">
          In November 2018, Bilal tried to end his life. For years, Bilal struggled with anxiety and
          depression. However, due to shame and lack of resources he never got the help he needed.
          Muslim mental health is real and has been an ongoing challenge for too long as there lies
          stigma around mental health and the religion.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Challenge">
          How might we make it easier for Muslim youth to access culturally fit therapists?
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Solution">
          <div className="mb-4">
            Our team designed and created a mobile application where Muslim youth can find and
            connect with in house Muslim therapists based on their needs and preferences.
          </div>
          <div className="mb-4">Check out the clickable prototype below.</div>
          <PrototypeFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQQXnt9NCVmrY9v8tIG1pCp%2FZiefah-Health-(Copy)%3Fpage-id%3D538%253A12600%26node-id%3D538%253A14230%26viewport%3D241%252C48%252C0.65%26scaling%3Dscale-down%26starting-point-node-id%3D538%253A14230" />
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Discover</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Primary Research">
          I conducted primary research with both interviews and surveys to gain insight on Muslim
          experiences with mental health and therapy (testing plan&nbsp;
          <a
            className="text-link hover:text-linkHover"
            href="https://docs.google.com/document/d/1twe8sSn7hNScEMMSd7tHZ7lmSfbI2eSjc53V8KMmPuE/edit?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            here
          </a>
          ).
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Objective">
          <ul className="list-disc list-inside">
            <li>Understand the needs and wants when searching for a therapist</li>
            <li>Learn about pain points, challenges, and frustrations when seeking therapy</li>
            <li>Discover current methods and resources when looking into therapy</li>
          </ul>
        </PageParagraph>
        <div className="flex space-x-28">
          <PageParagraph headerSize={HeaderSize.small} headerText="User Interviews">
            <ul className="list-disc list-inside">
              <li>Method: Remote ZOOM calls</li>
              <li>Participants: 4</li>
              <li>Age: 20's - 40's</li>
              <li>Religion: Muslim, Catholic, Christian</li>
              <li>Duration: 15 - 20 mins</li>
            </ul>
          </PageParagraph>
          <PageParagraph headerSize={HeaderSize.small} headerText="Surveys">
            <ul className="list-disc list-inside">
              <li>Method: Google Surveys</li>
              <li>Participants: 12</li>
              <li>Age: Teens - 40+</li>
              <li>Religion: Muslim, Catholic, Christian, Jewish</li>
            </ul>
          </PageParagraph>
        </div>
        {/* ADD IN EMOJI STUFF HERE */}
        <PageParagraph headerSize={HeaderSize.small} headerText="Research Synthesis">
          I transcribed the interview notes into Miro and then as a group we synthesized our
          findings by grouping them in trends (research findings documented{" "}
          <a
            className="text-link hover:text-linkHover"
            href="https://miro.com/app/board/uXjVOOKa7oo=/?invite_link_id=553380935531"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          ).
          <img className="mx-auto" src={require("./images/affinitymap.jpg")} alt="Affinity map" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Key Takeaways">
          The information that was presented to us was crucial in learning about challenges present
          in mental health. Regardless of needing to interview our targeted user group, we learned
          that mental health stigma and challenges were present everywhere.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Insights to Needs">
          <div className="flex flex-col items-center">
            <div>
              <div className="flex space-x-6">
                <img src={require("./images/memojihi.jpg")} alt="Memoji" />
                <div className="flex flex-col justify-center space-y-6">
                  <p>
                    9/12 participants wanted a therapist who share a similar trait or
                    characteristic.
                  </p>
                  <p className="font-bold">
                    Users need therapists who share similar backgrounds to find connection.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <img src={require("./images/memojitrust.jpg")} alt="Memoji" />
                <div className="flex flex-col justify-center space-y-6">
                  <p>9/12 participants utilized trusted sources when finding a therapist.</p>
                  <p className="font-bold">
                    Users need to feel supported and comforted through trusted reviews or
                    testimonials.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <img src={require("./images/memojinervous.jpg")} alt="Memoji" />
                <div className="flex flex-col justify-center space-y-6">
                  <p>10/12 participants dealt with a barrier or challenge when seeking therapy.</p>
                  <p className="font-bold">
                    Users need re-assurance and validation before taking the step of seeking
                    therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Secondary Research">
          Next, I conducted a series of secondary research about the Muslim religion, direct and
          indirect competition, and comparative features.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Muslim Religion">
          <div className="mb-4">
            It was very important that we as a team learned about the Muslim religion to design
            mindful and inclusive. Through my research, I learned that:
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>Mental illness may interpret as a curse or punishment from God</li>
            <li>
              Many Muslims turn to Imams, faith leaders, to seek help for their mental health
              symptoms but they are not trained mental health professionals and will resort to
              prayer as being adequate
            </li>
            <li>
              There needs to be more Muslim therapists and resources available to the Muslim
              community
            </li>
          </ul>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Competitive Analysis">
          <div className="mb-4">
            I looked into direct competitors that existed to see areas of growth for us at Ziefah
            Health.
          </div>
          <div className="flex justify-between space-x-12">
            <img
              className="basis-1/2"
              src={require("./images/comparativeanalysis.jpg")}
              alt="Competitive analysis"
            />
            <div className="flex flex-col justify-center space-y-6 basis-1/2">
              <img className="h-16" src={require("./images/lightbulb.svg").default} alt="" />
              <p>
                Many of these competitors lacked in depth search criteria when users were searching
                for their perfect therapist.
              </p>
            </div>
          </div>
          <div className="flex justify-between space-x-12">
            <div className="flex flex-col justify-center space-y-6 w-fit">
              <img className="h-16" src={require("./images/lightbulb.svg").default} alt="" />
              <p className="mb-4">These competitors do a wonderful job at:</p>
              <ul className="list-disc list-inside">
                <li>Making the user feel supported</li>
                <li>Supplying mental health resources</li>
                <li>Providing in house therapy</li>
              </ul>
            </div>
            <img
              className="basis-1/2"
              src={require("./images/competitiveanalysistable.jpg")}
              alt="Competitive analysis table"
            />
          </div>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Comparative Analysis">
          I then dug into researching features that the client proposed to be implemented into our
          design.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Bumble">
          <div className="mb-8">
            Our client was inspired by the matching and swiping features of this dating application.
          </div>
          <img className="w-full" src={require("./images/bumble.jpg")} alt="Bumble app" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Flo">
          <div className="mb-8">
            Our client was inspired by the symptom tracker while we were inspired by the interactive
            questionnaire of this menstural tracking application.
          </div>
          <img className="w-full" src={require("./images/flo.jpg")} alt="Flo app" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="MuzMatch">
          <div className="mb-8">
            One of the interview participants mentioned this dating application for Muslims. This
            helped us with UX content strategy when designing Ziefah Health.
          </div>
          <img className="w-full" src={require("./images/muzmatch.jpg")} alt="Muz Match app" />
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Define</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Personas">
          <div className="mb-4">
            I created two proto-personas to ensure we were designing with our targeted users in
            mind.
          </div>
          <div className="mb-4">
            Yara represents the clients targeted user group as she is Muslim and is 20 years old.
          </div>
          <img
            className="mx-auto shadow-md"
            src={require("./images/yarapersona.jpg")}
            alt="Yara's persona"
          />
          <div className="my-8">
            Ziefah Health is designed to tailor youth, however, we don't want to exclude potential
            adult users. So we created persona Aasim who fits that demographic.
          </div>
          <img
            className="mx-auto shadow-md"
            src={require("./images/aasimpersona.jpg")}
            alt="Aasim's persona"
          />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Empathy Map">
          <div className="mb-4">
            I had our team collaborate in this exercise so we could reflect and share our views on
            what we thought our targeted user would be thinking, doing, seeing, and feeling when
            considering therapy.
          </div>
          <img src={require("./images/feelingtable.png")} alt="Empathy Map" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="User Journey Map">
          <Zoom>
            <img src={require("./images/userjourneymap.png")} alt="User journey map" />
          </Zoom>
        </PageParagraph>
        <div className="mb-8">
          <HeaderText headerSize={HeaderSize.medium}>Define</HeaderText>
        </div>
        <PageParagraph headerSize={HeaderSize.small} headerText="Problem Statement">
          Muslim youth need a better way to find and connect with Muslim therapists to feel
          connected and understood.
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.small} headerText="Solution">
          A mobile application where Muslim youth can express their concerns, feelings, and needs so
          they can find a therapist who's best fit. The application will also provide a safe private
          space where Muslims can connect with their matched therapist via chat and video.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Develop</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="User Flow">
          <div className="mb-4">
            I created a user flow based on the clients business model - a free trial and payment
            plan.
          </div>
          <Zoom>
            <img src={require("./images/userflow.png")} alt="User flow" />
          </Zoom>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Sketches">
          <div className="mb-4">
            These are my early sketches of the onboarding process of Ziefah Health.
          </div>
          <img src={require("./images/sketches.png")} alt="App sketches" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Wireframes">
          <div className="mb-4">From our sketches, I created mid-fidelity wireframes.</div>
          <div className="mb-8">
            These screens are what the user sees when opening up Ziefah Health for the first time.
          </div>
          <div className="mx-auto max-w-[390px] shadow-md">
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {onboardingCarousel.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.imgSrc} alt={item.altText} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="my-8">
            These set of screens are a glimpse of what the user would see when answering questions
            about preferences so Ziefah Health can match them with the best suited therapist.
          </div>
          <div className="mx-auto max-w-[390px] shadow-md">
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {questionsCarousel.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.imgSrc} alt={item.altText} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="my-8">
            These are the screens the users see when getting matched with therapists.
          </div>
          <img src={require("./images/appscreenshots.jpg")} alt="App screenshots" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Moodboard">
          <div className="flex space-x-8">
            <img
              className="w-3/5 shadow-md"
              src={require("./images/moodboard.jpg")}
              alt="Moodboard"
            />
            <div className="w-2/5 flex flex-col justify-center">
              <div className="mb-4">
                Our team was inspired by the ocean. I designed this moodboard to help envision the
                shades of blue and text we wanted to utilize for Ziefah Health.
              </div>
              <div>Blue reminded us of health, relaxation, and calmness. </div>
            </div>
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Iterate</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Usability Testing">
          <div className="mb-4">
            Prior to building our high-fidelity prototype, we wanted to gain feedback and insights
            to improve our design before building out our final application.
          </div>
          <div className="mb-4">I had the 4 users complete the following tasks:</div>
          <ul className="list-disc list-inside mb-8">
            <li>Onboard as the user Yara</li>
            <li>Select the free trial plan</li>
            <li>Create an account</li>
            <li>Favorite a matched therapist based on your needs as Yara</li>
            <li>Schedule a free consultation</li>
          </ul>

          <img
            className="-mb-24"
            src={require("./images/memojipaypal.png")}
            alt="Memoji asking about PayPal option"
          />
          <div className="flex items-center space-x-12 justify-end">
            <img
              className="max-w-[220px] shadow-md"
              src={require("./images/paymentdetailsbefore.png")}
              alt="Payment details before"
            />
            <Icon className="text-2xl" iconName="Forward" />
            <img
              className="max-w-[220px] shadow-md"
              src={require("./images/paymentdetailsafter.png")}
              alt="Payment details after"
            />
          </div>

          <div className="flex flex-col my-16">
            <img
              className="-mb-32 self-end"
              src={require("./images/darkmodemessaging.png")}
              alt="Memoji feedback about messaing"
            />
            <div className="flex items-center space-x-12">
              <img
                className="max-w-[220px] shadow-md"
                src={require("./images/messagesbefore.png")}
                alt="Messages before"
              />
              <Icon className="text-2xl" iconName="Forward" />
              <img
                className="max-w-[220px] shadow-md"
                src={require("./images/messagesafter.png")}
                alt="Messages after"
              />
            </div>
          </div>

          <img
            className="-mb-36"
            src={require("./images/messagingmemoji.png")}
            alt="Memoji feedback on scheduling"
          />
          <div className="flex items-center space-x-12 justify-end">
            <img
              className="max-w-[220px] shadow-md"
              src={require("./images/messaging1.png")}
              alt="Payment details before"
            />
            <img
              className="max-w-[220px] shadow-md"
              src={require("./images/messaging2.png")}
              alt="Payment details after"
            />
            <img
              className="max-w-[220px] shadow-md"
              src={require("./images/messaging3.png")}
              alt="Payment details after"
            />
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection>
        <HeaderText headerSize={HeaderSize.large}>Deliver</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Prototype">
          <div className="mb-4">Here is our final MVP prototype we delivered to our client.</div>
          <div className="mb-4">
            Ziefah Health is a place where Muslim youth can find and connect with therapists based
            on their needs and preferences. We've created a safe space for you to talk with
            therapists who care about you and understand what you're going through.
          </div>
          <div className="mb-4">Clickable prototype below.</div>
          <PrototypeFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQQXnt9NCVmrY9v8tIG1pCp%2FZiefah-Health-(Copy)%3Fpage-id%3D538%253A12600%26node-id%3D538%253A14230%26viewport%3D241%252C48%252C0.65%26scaling%3Dscale-down%26starting-point-node-id%3D538%253A14230" />
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Style Guide">
          <div className="mb-4">
            Along with delivering our MVP, we formulated a style guide for future developers to
            reference.
          </div>
          <img className="shadow-md" src={require("./images/styleguide.png")} alt="Style guide" />
        </PageParagraph>
      </PageSection>
      <PageSection backgroundColor={ProjectSectionBG}>
        <HeaderText headerSize={HeaderSize.large}>Reflection</HeaderText>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Next Steps">
          <div className="mb-4">
            We're excited to see the future of Ziefah Health. However, there is always room for
            improvement and work to be done.
          </div>
          <div className="mb-4">Our next steps would be to:</div>
          <ul className="list-disc list-inside">
            <li>Conduct a second round of usability testing within our targeted user group</li>
            <li>Build out the therapist side of the application</li>
            <li>Review language and content with therapists</li>
          </ul>
        </PageParagraph>
        <PageParagraph headerSize={HeaderSize.medium} headerText="Looking Back">
          <div className="mb-4">
            I've learned and grown tremendously as a UX Designer on this project. As I managed
            communication and led meetings, I learned how to maintain a client relationship to
            ensure boundaries and to promote efficiency.
          </div>
          <div className="mb-4">
            Our team was a bit stumped at the start of this project as the targeted user group for
            this application was difficult to recruit for user interviews. We pivoted in relying
            heavily on insight from surveys to gain any knowledge on challenges people faced when
            pursuing therapy. Our next step would be to run usability testing on Muslim youth to
            gain a true understanding of pain points and frustrations from out targeted user group.
          </div>
          <div className="mb-8">
            We did not run into major bumps in the road as our client was fairly easy to work with
            and was very open minded to changes in ideas and direction. It was a pleasure to work
            with the client on this project; it was fun to collaborate and learn from one other.
            Overall, the experience was pleasurable and it was a blast to create something
            impactful. I hope that this application takes off so that it can raise awareness and
            increase access of mental health services within the Muslim community.
          </div>
          <img src={require("./images/teamphoto.jpg")} alt="Team" />
        </PageParagraph>
      </PageSection>
    </ProjectContainer>
  );
};
