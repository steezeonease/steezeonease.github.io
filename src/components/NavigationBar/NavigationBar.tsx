import React from "react";
import { css, IconButton } from "@fluentui/react";
import { Async } from "@fluentui/utilities";
import { Link, useLocation } from "react-router-dom";
import { SocialBar } from "../SocialBar/socialbar";

interface INavLink {
  toUrl: string;
  text: string;
}

interface INavigationBarProps {
  setMenuStatus: (status: boolean) => void;
  isMenuOpen: boolean;
}

export const NavigationBar: React.FC<INavigationBarProps> = (props: INavigationBarProps) => {
  const [hasShadow, setHasShadow] = React.useState<boolean>(false);
  const { isMenuOpen, setMenuStatus } = props;
  const location = useLocation();
  const async = new Async();

  React.useEffect(() => {
    if (isMenuOpen) {
      setMenuStatus(false);
    }
  }, [location.pathname]);

  const navLinks: INavLink[] = [
    {
      toUrl: "/",
      text: "Work",
    },
    {
      toUrl: "/about",
      text: "About",
    },
  ];

  const onDocumentScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    setHasShadow(c > 50);
  };

  const onToggleMenu = () => {
    setMenuStatus(!isMenuOpen);
  };

  const throttledScroll = async.throttle(onDocumentScroll, 50);

  React.useEffect(() => {
    document.addEventListener("scroll", throttledScroll);

    return function cleanUp() {
      document.removeEventListener("scroll", throttledScroll);
    };
  });

  const linkClasses = (isCurrent: boolean) => {
    let textClasses =
      "text-lg w-min hover:text-shadow focus-visible:outline-1 focus-visible:outline-black focus-visible:outline focus-visible:outline-offset-8";
    if (isCurrent) {
      textClasses += " border-b border-black border-solid";
    }
    return textClasses;
  };

  const navLinksElem = (
    <>
      {navLinks.map((navLink, idx) => {
        return (
          <Link
            key={idx}
            className={linkClasses(navLink.toUrl === location.pathname)}
            to={navLink.toUrl}
            data-is-current={navLink.toUrl === location.pathname}
          >
            {navLink.text}
          </Link>
        );
      })}
      <a
        className={linkClasses(false)}
        rel="noreferrer"
        href="https://dl.dropboxusercontent.com/s/bhrbenkkdwn50em/Hannah%20Yi%20Resume.pdf?dl=0"
        target={"_blank"}
      >
        Resume
      </a>
    </>
  );

  const iconName = isMenuOpen ? "Cancel" : "GlobalNavButton";

  return (
    <div
      className={css(
        `flex justify-between mt-8 pb-4 pt-0 mb-4 h-min sticky top-0 bg-white z-10 flex-col sm:flex-row sm:mt-12 sm:px-8 sm:pt-4`,
        {
          "shadow-md": hasShadow,
        }
      )}
    >
      <div className={css("ml-6 sticky top-[32px] z-40 sm:hidden h-0")}>
        {isMenuOpen && <div className="backdrop-blur-sm fixed inset-0 pointer-events-none z-50 " />}
        <div
          className={css("fixed inset-0 pointer-events-none opacity-0 transition-[opacity] z-50 ", {
            "backdrop-blur-md bg-white opacity-60": isMenuOpen,
          })}
        />
        <IconButton
          className="z-50 text-black hover:text-black"
          iconProps={{ iconName: iconName }}
          onClick={onToggleMenu}
        />
        {isMenuOpen && (
          <nav className={css("flex flex-col z-50 self-start space-y-8 mt-8 absolute sm:hidden")}>
            {navLinksElem}
          </nav>
        )}
      </div>
      <div className="flex flex-col mt-8 sm:justify-start items-center sm:mt-0 sm:items-start">
        <Link className="mb-4" to="/">
          <div className="relative z-20 font-header text-3xl">
            <img
              className={css("absolute bottom-[calc(100%-25px)] left-0 transition-opacity", {
                "opacity-0": hasShadow,
                "opacity-100": !hasShadow,
              })}
              src={require("./images/monstera.svg").default}
              alt=""
            />
            Hannah Yi
          </div>
        </Link>
        <SocialBar />
      </div>
      <nav className={css("hidden space-x-16 self-start sm:flex")}>{navLinksElem}</nav>
    </div>
  );
};
