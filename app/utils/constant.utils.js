// font family

import { StatusBar } from "react-native";
import { Assets } from "./imports.utils";

// App Constants

export const serverUrl = () => {
  let endpoint = "http://143.110.245.135/api/";
  // let endpoint = "http://padane.in/api/";

  return endpoint;
};

export const statusbar = StatusBar.currentHeight;

export const btnBlue = [
  "rgba(165, 166, 246, 0.8)",
  "rgba(120, 121, 241, 1)",
  "rgba(93, 95, 239, 0.8)",
];

export const bgBottomYellow = [
  "rgba(255, 195, 203, 0.2)", // #FFC3CB with 50% opacity.
  "rgba(0, 210, 225, 0.1)",
  "rgba(255, 191, 53, 0.1)",
];

export const bgAllColor = [
  "rgba(255, 191, 53, 0.1)", // #FFBF35 with 50% opacity
  "rgba(108, 77, 218, 0.2)", // #6C4DDA with 50% opacity
  "rgba(255, 195, 203, 0.2)", // #FFC3CB with 50% opacity
  "rgba(255, 195, 221, 0.2)", // #FFC3DD with 50% opacity
  "rgba(255, 228, 244, 0.2)", // #FFE4F4 with 50% opacity
  "rgba(0, 210, 225, 0.1)", // #00D2E1 with 50% opacity
  "rgba(255, 226, 133, 0.4)", // #FFE285 with 50% opacity
  "rgba(0, 210, 225, 0.1)",
  "rgba(134, 104, 254, 0.2)", // #8668FE with 50% opacity
  "rgba(255, 78, 152, 0.2)", // #FF4E98 with 50% opacity
];

export const btnGold = ["#FFBF35", "#FFA900"];

export const btnPing = ["#FF9FC7", "#F32878"];

export const btnLightBlue = ["#466FFF", "#3462FF"];

export const tabs = ["All Events", "Wall"];

export const invitetabs = ["Musician", "Band", "Music School"];

export const Days = ["THIS WEEK", "THIS MONTH"];

export const type = [
  { label: "Online", value: 1 },
  { label: "Offline", value: 2 },
];

export const music_catagoties = [
  { label: "Folks", value: 1 },
  { label: "Carnatic", value: 2 },
  { label: "Western", value: 3 },
];

export const Instruments = [
  { label: "Guitar", value: 1 },
  { label: "Ukulele", value: 2 },
  { label: "Banjo", value: 3 },
  { label: "Mridangam", value: 4 },
  { label: "Veena", value: 5 },
  { label: "Tanpura", value: 6 },
  { label: "Ghatam", value: 7 },
  { label: "Nadaswaram", value: 8 },
  { label: "Flute", value: 9 },
  { label: "Piano", value: 10 },
  { label: "Accordion", value: 11 },
];

export const categories = [
  { label: "Contest", value: 1 },
  { label: "Orchestra", value: 2 },
  { label: " Bhajan ", value: 3 },
];

export const gender = [
  { label: "Male", value: 1 },
  { label: "Female", value: 2 },
  { label: " Transgender ", value: 3 },
];

export const search_type = [
  { label: "Recent", value: "recent" },
  { label: "Favorites", value: "i_follow" },
  { label: "Opportunities ", value: "interest" },
];

export const multiSelectCheckbox = (state, item) => {
  const index = state.indexOf(item.value);
  if (index !== -1) {
    state.splice(index, 1);
  } else {
    state.push(item.value);
  }
  return state;
};

export const multiSelectCheckboxId = (state, id) => {
  const index = state.indexOf(id);
  if (index !== -1) {
    state.splice(index, 1);
  } else {
    state.push(id);
  }
  return state;
};

export const postTab = [
  {
    active: Assets.widget_tab_active,
    inactive: Assets.widget_tab_inactive,
    label: "Buds",
  },
  {
    active: Assets.user_tab_active,
    inactive: Assets.user_tab_inactive,
    label: "Buddys",
  },
  {
    active: Assets.heart_tab_active,
    inactive: Assets.heart_tab_inactive,
    label: "Board",
  },
  {
    active: Assets.widget_tab_active,
    inactive: Assets.widget_tab_inactive,
    label: "ID Card",
  },
];

export const OrgAndSchools = (role) => {
  let status = false;
  if (role == "Musician" || role == "Band") {
    status = false;
  } else {
    status = true;
  }
  return status;
};
