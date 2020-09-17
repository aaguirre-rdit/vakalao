import React , {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { View, Form, Button, Text} from 'native-base';
const  SignUp = (props) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button onPress={()=>props.navigation.navigate('Home')}>
        <Text>Go home</Text>
      </Button>
      <Button onPress={()=>props.navigation.navigate('SignIn')}>
        <Text>Go back</Text>
      </Button>
    </View>
  )
};
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

export default SignUp;
