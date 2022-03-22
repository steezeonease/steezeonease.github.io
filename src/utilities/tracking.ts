import ReactGA from "react-ga4";

export const LOG_EVENT = (category: string, action: string, label: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
