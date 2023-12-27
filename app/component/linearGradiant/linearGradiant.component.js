import { View, Text } from "react-native";
import React, { Children } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Constants } from "../../utils/imports.utils";

const LinearGradiant = ({ children, style, color, onPress }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.1 }}
      colors={color ? color : Constants.bgBottomYellow}
      style={style}
      onPress={onPress}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradiant;
