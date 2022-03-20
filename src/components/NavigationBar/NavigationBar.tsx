import React from "react";
import { css } from "@fluentui/react";
import { Async } from "@fluentui/utilities";
import { Link } from "react-router-dom";
import { SocialBar } from "../SocialBar/socialbar";
import { PADDING } from "../../utilities/responsive";

interface INavLink {
  toUrl: string;
  text: string;
}

export const NavigationBar: React.FC = () => {
  const [hasShadow, setHasShadow] = React.useState<boolean>(false);
  const async = new Async();

  const navLinks: INavLink[] = [
    {
      toUrl: "/",
      text: "Work",
    },
    {
      toUrl: "/about",
      text: "About",
    },
    {
      toUrl: "/resume",
      text: "Resume",
    },
  ];

  const onDocumentScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    setHasShadow(c > 50);
  };

  const throttledScroll = async.throttle(onDocumentScroll, 50);

  React.useEffect(() => {
    document.addEventListener("scroll", throttledScroll);

    return function cleanUp() {
      document.removeEventListener("scroll", throttledScroll);
    };
  });

  return (
    <div
      className={css(
        `flex justify-between mt-12 pb-4 pt-4 mb-10 h-min sticky top-0 bg-white z-10 ${PADDING}`,
        {
          "shadow-md": hasShadow,
        }
      )}
    >
      <div className="flex flex-col">
        <Link className="mb-4" to="/">
          <div className="relative font-header text-3xl">
            <img
              className={css(
                "absolute bottom-[calc(100%-25px)] left-0 transition-opacity opacity-100",
                {
                  "opacity-0": hasShadow,
                }
              )}
              src={require("./images/monstera.svg").default}
              alt=""
            />
            Hannah Yi
          </div>
        </Link>
        <SocialBar />
      </div>
      <nav className="flex space-x-16 self-start">
        {navLinks.map((navLink, idx) => {
          return (
            <Link
              key={idx}
              className="text-lg hover:text-shadow focus-visible:outline-1 focus-visible:outline-black focus-visible:outline focus-visible:outline-offset-8"
              to={navLink.toUrl}
            >
              {navLink.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
