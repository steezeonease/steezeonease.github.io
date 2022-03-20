import { Icon } from "@fluentui/react";
import React from "react";

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 10) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 6);
    }
  };

  const onDocumentScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(c > 800);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", onDocumentScroll);

    return function cleanUp() {
      document.removeEventListener("scroll", onDocumentScroll);
    };
  });

  let classNames =
    "fixed bottom-[16px] left-[16px] transition-transform rounded-full shadow-lg bg-black w-[60px] h-[60px] flex items-center justify-center hover:cursor-pointer";

  if (isVisible) {
    classNames += " scale-100";
  } else {
    classNames += " scale-0";
  }

  return (
    <div data-test="scrollbutton" className={classNames} onClick={scrollToTop}>
      <Icon className="text-white text-2xl" iconName="ChevronUpSmall" />
    </div>
  );
};
