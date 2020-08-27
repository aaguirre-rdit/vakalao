import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../scenes/home";
import Welcome from "../scenes/welcome";
import { AsyncStorage } from "react-native";


const welcomeShown = async () => {
  return await AsyncStorage.getItem("@vakalao:WELCOME_SHOWN");
};

const Stack = createStackNavigator();

const initialRoute = !welcomeShown() ? "Home" : "Welcome";

const mainNavigation = (props) => {
  console.log(props.initialRoute);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={props.initialRoute}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigation;
