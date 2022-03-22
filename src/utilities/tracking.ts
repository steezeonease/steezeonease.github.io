import ReactGA from "react-ga4";

export const LOG_EVENT = (name: string, category: string, action: string, label: string) => {
  ReactGA.event(name, {
    category: category,
    action: action,
    label: label,
  });
};
