import { useEffect } from "react";
import { useLocation } from "react-router";

interface IScrollToTop {
  children?: React.ReactNode;
}

const ScrollToTop = (props: IScrollToTop) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
