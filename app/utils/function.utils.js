import { useState } from "react";
import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);

  const newSetState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return [state, newSetState];
};

export const capitalizeFLetter = (string = "") => {
  if (string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
};

export const Width = (value) => {
  return (value * width) / 100;
};

export const Height = (value) => {
  return (value * height) / 100;
};
