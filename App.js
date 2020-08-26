import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigations/mainNavigation';

export default function App() {
  return (
    <MainNavigation/>
  );
}


