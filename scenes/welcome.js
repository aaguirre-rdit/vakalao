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
      <Text style={styles.welcomeText}>Welcome!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F50057',
    alignItems: 'center',
    justifyContent: 'center',
    height:'75%'
  },
  welcomeText: {
    color:'#fff',
    fontSize:36
  }
});
