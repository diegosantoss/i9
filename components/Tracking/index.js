import ReactGA from "react-ga";

export const initGA = (trackingID) => {
  console.log(trackingID);
  ReactGA.initialize(trackingID);
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const Event = (category, action, label) => {
  console.log(category);
  console.log(action);
  console.log(label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: 1
  });
}; 