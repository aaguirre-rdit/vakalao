import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigation from './navigations/mainNavigation';
import * as Font from 'expo-font';
import { AsyncStorage } from "react-native";
import { AppLoading } from 'expo';

const welcomeShown = async () => {
  return await AsyncStorage.getItem("@vakalao:WELCOME_SHOWN");
};
const UserContext = React.createContext({
  userToken:'123' // CHANGE THIS LATER!
});

export default class App extends React.Component{
  state = {
    reqIsReady : false,
    initialRoute : undefined
  };
  initialize = async () => {
    let  hasUsedBefore = await AsyncStorage.getItem("@vakalao:WELCOME_SHOWN");
    const initialRoute = hasUsedBefore ? "Home" : "Welcome";
    this.setState({
      initialRoute
    })
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'AvenirNext-Bold':require('./assets/fonts/AvenirNext-Bold.ttf')
    });

  };


  render()
  {
    if (!this.state.reqIsReady) {
      return (
        <AppLoading
          startAsync={this.initialize}
          onFinish={() => this.setState({ reqIsReady: true })}
          onError={console.warn}
        />
      ); }
    return (
      <UserContext.Provider>
        <MainNavigation initialRoute={this.state.initialRoute}/>
      </UserContext.Provider>
    );

  }
}


