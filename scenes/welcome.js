import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AsyncStorage } from "react-native";
import { Button, Text } from "native-base";

import {StatusBar} from "expo-status-bar";

const saveToken = async () => {
  return await AsyncStorage.setItem("@vakalao:WELCOME_SHOWN");
};
const onSignInClick = (navigator) => {
  navigator.navigate('SignIn')
};
export default function Welcome(props) {
  //saveToken(); <---- UNCOMMENT  THIS LATER!
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <Button
        onPress={()=>onSignInClick(props.navigation)}
        full
        style={styles.buttonStyle}>
        <Text
          style={{
            color: '#880E4F'
          }
          }
        >Sign In</Text>
      </Button>
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
  textContainer: {
    height:'80%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'auto'
  },
  welcomeText: {
    color:'#fff',
    fontSize:36,

  },
  buttonStyle: {
    backgroundColor:'#FCE4EC',

    marginHorizontal:20,
    borderRadius:25
  }
});
