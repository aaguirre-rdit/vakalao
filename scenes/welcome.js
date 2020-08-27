import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from "react-native";


import {StatusBar} from "expo-status-bar";

const saveToken = async () => {
  return await AsyncStorage.setItem("@vakalao:WELCOME_SHOWN");
};
export default function Welcome() {
  //saveToken(); <---- UNCOMMENT  THIS LATER!
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
