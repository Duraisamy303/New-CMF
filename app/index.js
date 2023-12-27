import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";

const index = () => {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    italic: require("./assets/fonts/Roboto-Italic.ttf"),
    boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    light: require("./assets/fonts/Roboto-Light.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null; // Return null or a loading indicator while fonts are loading.
  }

  //to check token based redirect
  const token = false;
  const navigation = () => {
    let nav = "";
    if (token) {
      nav = "/home";
    } else {
      nav = "/screen/login";
    }
    return nav;
  };
  return <Redirect href={navigation()} />;
};

export default index;

const styles = StyleSheet.create({});

// "/"
