import React from "react";
import { PageContainer } from "../../components/PageComponents/PageContainer/pagecontainer";
import { HeaderSize } from "../../components/ProjectPage/HeaderText/headertext";
import { PageSection } from "../../components/PageComponents/ProjectSection/projectsection";
import { TopTextHeader } from "../../components/TopTextHeader/toptextheader";
import { PageParagraph } from "../../components/PageComponents/PageParagraph/PageParagraph";

export const About = () => {
  return (
    <PageContainer>
      <TopTextHeader
        subHeaderText="What others have said..."
        headerText="&ldquo;This is to say that Hannah might be one of the most dedicated and passionate designers I have ever met. She is a trusted team player and cares deeply about those around her.&rdquo;"
      />
      <div className="flex space-x-8 mb-8 max-w-5xl">
        <div>
          <img
            className="w-full"
            src={require("./images/aboutpic1.jpg")}
            alt="Me posing with a plant"
          />
        </div>
        <div>
          <img
            className="w-full"
            src={require("./images/aboutpic2.jpg")}
            alt="Me posing with a plant"
          />
        </div>
      </div>
      <PageSection backgroundColor="rgba(248, 255, 232, 0.4)">
        <PageParagraph headerSize={HeaderSize.medium} headerText="About Hannah - the human">
          <div className="mb-4">
            Hello! I'm glad you're here to meet the person behind the design!
          </div>
          <div className="mb-4">
            My drive to learn from human beings and my desire to make life easier for others
            inspired my transition to UX Design. Before becoming a UX Designer, I spent 5 years in
            the healthcare industry where patient experience is paramount. I worked closely with
            patients and healthcare providers to deliver the best possible healthcare outcomes.
            Despite my mission to put patients first, I witnessed how many products used in the
            industry work against this mission because of poor design. I'm constantly fired up to
            use design thinking to fill in these gaps for the user, improving experiences for
            patients and beyond.
          </div>
          <div>
            Outside of the professional world, I am an avid plant collector, extreme food
            enthusiast, and an animal lover.
          </div>
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageParagraph headerSize={HeaderSize.medium} headerText="About Steeze - the persona">
          <div className="mb-4">
            In case you're wondering about the word &ldquo;steeze&rdquo; being sprinkled throughout
            my social handles, here's a quick story!
            <div className="mb-4">
              Back in college, I really loved hearing the slang word &ldquo;steeze.&rdquo; I thought
              the word was super fun as it 1) Combined the words &ldquo;style&rdquo; and
              &ldquo;ease&rdquo; to create “steeze” and 2) I felt it represented me as a person.
            </div>
          </div>
          <div className="mb-4">
            After creating my first Instagram handle @steezeonease, I used &ldquo;steeze&rdquo; in
            literally everything I've created: plant IG, dog IG, gamer tag, LinkedIn, portfolio,
            email... Heck, my friends now call me by this nickname.
          </div>
          <div>Somehow, I branded myself and it stuck with me ever since.</div>
        </PageParagraph>
      </PageSection>
    </PageContainer>
  );
};
