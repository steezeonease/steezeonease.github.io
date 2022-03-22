import React from "react";
import { LOG_EVENT } from "../../utilities/tracking";

export const SocialBar: React.FC = () => {
  return (
    <div className="flex space-x-8 sm:space-x-6 lg:space-x-4">
      <a
        href="https://www.linkedin.com/in/steeze/"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          LOG_EVENT("LinkedIn profile viewed", "Links", "LinkedIn", "LinkedIn link clicked")
        }
      >
        <img src={require("./images/linkedin.svg").default} alt="LinkedIn icon" />
      </a>
      <a
        href="mailto: designbysteeze@gmail.com"
        target="_blank"
        rel="noreferrer"
        onClick={() => LOG_EVENT("E-mail link clicked", "Links", "E-mail", "E-mail link clicked")}
      >
        <img src={require("./images/mail.svg").default} alt="mail icon" />
      </a>
    </div>
  );
};
