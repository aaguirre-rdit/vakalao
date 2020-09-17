import React , {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {FontAwesome} from 'react-native-vector-icons';
import { View, Form, Button, Text, Item, Label, Input, Icon} from 'native-base';
import {navigateTo} from '../../utils/navigationUtils';

const  SignIn = (props) => {
  return (
    <View style={styles.container}>

      <Form style={styles.formContainer}>
        <Text
          style={{
            textAlign:'center',
            fontWeight:'bold'
          }}
        >Sign In</Text>
        <Item fixedLabel
              last
              style={styles.itemContainer}>
          <Label>Email</Label>
          <Input
            style={styles.formTextInput}
            placeholder={'Email'}/>
        </Item>
        <Item fixedLabel
              last
              style={styles.itemContainer}>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            style={styles.formTextInput}
            placeholder={'Password'}/>
            <TouchableOpacity
              onPress={()=>alert('HAHA')}
            >
            <Text
              style={styles.forgotPW}
            >
              Forgot your password?</Text>
            </TouchableOpacity>
        </Item>
        <View
          style={{
            display:'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-around'
          }}
        >
          <View style={styles.hairline} />
          <Text style={styles.loginButtonBelowText1}>OR</Text>
          <View style={styles.hairline} />
        </View>
        <View
          style={styles.socialContainer}
        >
          <Button
          style={styles.socialGoogleBtn}
          iconRight light>
          <Text>Sign in with Google</Text>
          <FontAwesome
            size={15}
            color={'red'}
            name='google' />
        </Button>
          <Button
            style={styles.socialFbBtn}
            iconRight
            disabled={true}
            light>
            <Text>Sign in with Facebook</Text>
            <FontAwesome
              size={17}
              color={'#3b5998'}
              name='facebook' />
          </Button>
        </View>
      </Form>
      <View style={{
        flexDirection:'row',
        alignSelf:'center',
        width:220,
        margin:'auto',
        justifyContent:'space-around',
        paddingVertical: 5,
      }}>
        <Text
          style={styles.smallTxt}
        >
        Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={()=>navigateTo(props.navigation,'SignUp')}
        >
          <Text
            style={{...styles.smallTxt,fontWeight: 'bold'}}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Button onPress={()=>navigateTo(props.navigation,'Home')}>
        <Text>Go home</Text>
      </Button>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F50057',
    alignItems: 'stretch',
    justifyContent: 'center',
    height:'75%',
    padding:20,
    paddingTop:50,
  },
  textContainer: {
    height:'80%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'auto'
  },
  formContainer:{
    backgroundColor:'#fff',
    paddingVertical:30,
    paddingHorizontal:5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  itemContainer:{
    display:'flex',
    flexDirection:'column',
    padding:10,
    height:100,
    alignItems:'stretch',
    borderColor:'transparent'
  },
  formTextInput:{
    borderColor:'#aaa',
    borderWidth:0.5,
    borderRadius:5,
    flex:1,
    maxHeight:30
  },
  forgotPW:{
    fontSize:13,
    color:'#b1006a',
    marginTop:3
  },
  hairline:{
    backgroundColor: '#A2A2A2',
    height: 2,
    width: '40%'
  },
  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },
  socialContainer:{
    padding:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  socialGoogleBtn:{
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'red',
    borderWidth: 1,
    textAlign: 'center',
    alignSelf:'center',
    paddingRight:10,
    marginVertical: 5
  },
  socialFbBtn:{
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'#3b5998',
    borderWidth: 1,
    textAlign: 'center',
    alignSelf:'center',
    paddingRight:10,
    marginVertical: 5
  },
  smallTxt:{
    color:'#fff',
    fontSize:13
  }
});

export default SignIn;
