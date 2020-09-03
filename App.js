import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigation from './navigations/mainNavigation';

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

  };
  render()
  {

    console.log(welcomeShown());
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


