import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../scenes/home';
import CreateBucket from "../scenes/createBucket";
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
const Tab = createMaterialBottomTabNavigator();

const bottomTab = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor:'#C51162'
      }}
      inactiveColor={'#F48FB1'}
    >
      <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
        name="Create Bucket"
        component={CreateBucket}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
};
export default  bottomTab;
