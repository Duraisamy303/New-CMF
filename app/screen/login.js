import { StyleSheet, View, ScrollView, TouchableHighlight } from "react-native";
import React, { useEffect } from "react";
import {
  Assets,
  Colors,
  Header,
  Image,
  LinearGradiant,
  // Models,
  PrimaryButton,
  Text,
  TextInput,
} from "../utils/imports.utils";
import { CommonActions } from "@react-navigation/native";
import { FontSize, Height, Width, useSetState } from "../utils/function.utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Containers from "../common_component/hoc/container.hoc";
// import { user_details } from "../../utils/redux.utils";

export default function Login(props) {
  const navigation = useNavigation();

  const [state, setState] = useSetState({
    loading: false,
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      setState({ loading: true });
      if (state.email == "") {
        setState({ loading: false });
      } else if (state.password == "") {
        setState({ loading: false });
      } else {
        const body = {
          username: state.email,
          password: state.password,
        };
        // const result = await Models.auth.login(body);
        console.log("login --->", result);
        setState({ loading: false, email: "", password: "" });
        AsyncStorage.setItem("token", `Token ${result.token}`);
        user_details(result.user);
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "BottomNavigation" }],
          })
        );
      }
    } catch (e) {
      console.log("✌️e --->", e);
      setState({ loading: false });
      console.log(e);
    }
  };
  return (
    <LinearGradiant>
      <Containers style={css.container} screen backgroundColor="transparent">
        <View style={css.wrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: Height(10),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Header label="Sign In" /> */}
            </View>
            <View style={css.img_container}>
              <View style={css.img}>
                <Image
                  src={Assets.mobile_ping_1}
                  height={"100%"}
                  width={"100%"}
                />
              </View>
            </View>
            <View style={css.input_container}>
              <TextInput
                fontfamily="regular"
                placeholder="Email"
                leftIconPosition
                height={50}
                size={18}
                leftIcon={Assets.email_ping}
                value={state.email}
                onChange={(e) => setState({ email: e })}
              />
              <TextInput
                fontfamily="regular"
                placeholder="Password"
                rightIconPosition
                leftIconPosition
                height={50}
                secure
                size={18}
                leftIcon={Assets.lock}
                rightIcon={Assets.eye_open}
                value={state.password}
                onChange={(e) => setState({ password: e })}
              />
              <View style={css.text_container}>
                <View style={css.text}>
                  {/* <Image src={Assets.checked} height={20} width={20} /> */}
                  <Text color={Colors.Dark} size={18} family={"regular"}>
                    Remember me
                  </Text>
                </View>
                <TouchableHighlight
                  onPress={() => navigation.navigate("forget_password")}
                  underlayColor={Colors.light}
                >
                  <Text
                    color={Colors.textPrimary}
                    size={18}
                    family={"regular"}
                    onPress={() => navigation.navigate("forget_password")}
                  >
                    Forgot password ?
                  </Text>
                </TouchableHighlight>
              </View>
              <PrimaryButton
                height={50}
                width={"100%"}
                text={"Sign In"}
                color={Colors.light}
                activity={state.loading}
                onPress={() => handleSubmit()}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Text color={Colors.Dark} size={18} family={"regular"}>
                    Don't have an account ?
                  </Text>
                </View>
                <TouchableHighlight
                  onPress={() => navigation.navigate("signUp")}
                  underlayColor={Colors.white}
                >
                  <>
                    <Text
                      color={Colors.textPrimary}
                      size={18}
                      family={"bold"}
                      onPress={() => navigation.navigate("signUp")}
                    >
                      Sign up
                    </Text>
                  </>
                </TouchableHighlight>
              </View>
            </View>
            {/* <View
            style={{
              height: Height(25),
              // backgroundColor: "blue",
              justifyContent: "center",
            }}
          > */}

            {/* </View> */}
          </ScrollView>
        </View>
      </Containers>
    </LinearGradiant>
  );
}

const css = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    height: "100%",
    width: "95%",
    alignItems: "center",
  },
  img_container: {
    height: Height(40),
    alignItems: "center",
    justifyContent: "center",
  },
  img: { height: 200, width: 200, overflow: "hidden" },

  // img: { height: Height(25), width: Height(25), overflow: "hidden" },
  input_container: {
    height: Height(43),
    backgroundColor: Colors.light,
    borderRadius: 20,
    padding: 12,
    gap: 8,
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  text: { flexDirection: "row", alignItems: "center", gap: 10 },
});
