import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  FontSize,
  Height,
  useSetState,
  Width,
} from "../../../utils/function.utils";
import {
  Colors,
  Constants,
  Assets,
  Image,
  Text,
} from "../../../utils/imports.utils";

const Input = (props) => {
  const {
    placeholder,
    styles,
    children,
    leftIconPosition,
    rightIcon,
    leftIcon,
    color,
    borderColor,
    size,
    iconStyle,
    imageWidth,
    imageHeight,
    fontfamily,
    backgroundColor,
    iconOnPress,
    inputStyle,
    placeholderTextColor,
    secure,
    value,
    onChange,
    headerText,
    borderWidth,
    borderRadius,
    editable,
    onPressIn,
    height,
    require,
    paddingLeft,
  } = props;

  const [state, setState] = useSetState({
    show: false,
  });

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: paddingLeft ? paddingLeft : 0,
        }}
      >
        {headerText && (
          <Text color={Colors.Dark} size={18} family={"bold"} left={5}>
            {headerText}
          </Text>
        )}
        {require && (
          <Text size={20} family="regular" color={Colors.error}>
            *
          </Text>
        )}
      </View>
      <View
        style={[
          css.inputContainer,
          styles,
          {
            borderColor: borderColor ? borderColor : Colors.inputBg,
            backgroundColor: backgroundColor ? backgroundColor : Colors.inputBg,
            borderWidth: borderWidth ? borderWidth : 0,
            borderRadius: borderRadius ? borderRadius : 15,
            // height:height?Height(height):Height(6)
          },
        ]}
      >
        {leftIconPosition && (
          <TouchableOpacity
            onPress={iconOnPress}
            style={[css.imageView, iconStyle]}
            activeOpacity={1}
          >
            <Image
              src={leftIcon}
              width={imageWidth ? imageWidth : 22}
              height={imageHeight ? imageHeight : 22}
              borderRadius={5}
            />
          </TouchableOpacity>
        )}
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          editable={editable ? editable : true}
          onPressIn={onPressIn}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : Colors.textGray
          }
          secureTextEntry={props.secure ? (state.show ? false : true) : false}
          style={[
            css.input,
            {
              color: color ? color : Colors.Dark,
              // height:"100%",
              fontSize: Width(size || 5) / 4,
              // fontSize: FontSize(Height(size || 5) / 4),

              fontFamily: fontfamily ? fontfamily : "regular",
              width:
                leftIconPosition && !secure
                  ? "85%"
                  : leftIconPosition && secure
                  ? "70%"
                  : secure
                  ? "80%"
                  : "100%",
            },
            inputStyle,
          ]}
          autoCapitalize="none"
          autoCorrect={false}
          {...props}
        ></TextInput>
        {secure && (
          <TouchableHighlight
            underlayColor={Colors.light}
            onPress={() => setState({ show: !state.show })}
            style={[css.imageView, iconStyle]}
            activeOpacity={1}
          >
            <>
              <Image
                src={rightIcon}
                width={imageWidth ? imageWidth : 22}
                height={imageHeight ? imageHeight : 22}
              />
            </>
          </TouchableHighlight>
        )}
      </View>
    </>
  );
};

const css = StyleSheet.create({
  inputContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: Colors.inputBg,
    borderWidth: 0,
    overflow: "hidden",
  },
  input: {
    paddingHorizontal: 10,
    // fontFamily: Constants.regular,
    paddingLeft: Width(5),
    // borderRadius: 16,
    textAlignVertical: "center",
  },
  imageView: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Input;
