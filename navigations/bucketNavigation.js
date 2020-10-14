import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../scenes/home';
import BucketView from '../scenes/bucket';
const Stack = createStackNavigator();

const BucketNavigation = props => {

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bucket" component={BucketView}/>
    </Stack.Navigator>
  )
};


export default BucketNavigation;
