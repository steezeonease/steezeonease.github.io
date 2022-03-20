import React from "react";

export const SocialBar: React.FC = () => {
  return (
    <div className="flex space-x-8 sm:space-x-4">
      <a href="https://www.linkedin.com/in/steeze/" target="_blank" rel="noreferrer">
        <img src={require("./images/linkedin.svg").default} alt="LinkedIn icon" />
      </a>
      <a href="mailto: designbysteeze@gmail.com" target="_blank" rel="noreferrer">
        <img src={require("./images/mail.svg").default} alt="mail icon" />
      </a>
    </div>
  );
};
