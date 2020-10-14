import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../scenes/home';
import BucketNavigation from '../navigations/bucketNavigation';
import CreateBucket from "../scenes/createBucket";
import Profile from '../scenes/profile';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from 'react-native-vector-icons';

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
      component={BucketNavigation}
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
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
};
export default  bottomTab;
