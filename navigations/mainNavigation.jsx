import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../scenes/home";
import Welcome from "../scenes/welcome";
import { AsyncStorage } from "react-native";
import BottomTab from "./bottomTabNavigation";
import SignIn from "../scenes/auth/signIn";
import SignUp from "../scenes/auth/signUp";

const welcomeShown = async () => {
  return await AsyncStorage.getItem("@vakalao:WELCOME_SHOWN");
};

const Stack = createStackNavigator();

const initialRoute = !welcomeShown() ? "Home" : "Welcome";

const mainNavigation = props => {
  console.log(props.initialRoute);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"none"}
        initialRouteName={props.initialRoute}
      >

        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigation;
