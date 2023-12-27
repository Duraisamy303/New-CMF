import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Colors, LinearGradiant, Text } from "../../../utils/imports.utils";

const PrimaryButton = (props) => {
  const {
    text,
    color,
    backgroundColor,
    activity,
    onPress,
    width,
    height,
    style,
    disabled,
    icon,
    family,
    size,
    center,
    disableColor,
    borderRadius,
  } = props;

  

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || activity}
    >
      <LinearGradiant
        onPress={onPress}
        color={
          disabled
            ? [Colors.Dark, Colors.textGreen]
            : backgroundColor
            ? backgroundColor
            : ["#FF9FC7", "#F32878"]
        }
        style={[
          css.container,
          {
            width: width ? width : "100%",
            height: height ? height : 50,
            borderRadius: borderRadius ? borderRadius : 15,
            // backgroundColor: disabled
            //   ? disableColor
            //     ? disableColor
            //     : Colors.disabled
            //   : backgroundColor
            //   ? backgroundColor
            //   : Colors.white,

            color: color,
          },
          center && { alignSelf: "center" },
          style,
        ]}
      >
        <View style={css.icon}>
          {icon && (
            <View style={css.iconContainer}>
              <props.icon width={25} height={25} />
            </View>
          )}
          {!activity ? (
            <Text
              size={size ? size : 20}
              family={family ? family : "bold"}
              color={Colors.light}
            >
              {text}
            </Text>
          ) : (
            <ActivityIndicator size="small" color={Colors.light} />
          )}
        </View>
      </LinearGradiant>
    </TouchableOpacity>
  );
};

const css = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -15,
  },
});

export default PrimaryButton;
