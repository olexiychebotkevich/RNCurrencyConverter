import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RegisterScreen from './app/components/registration'
import LoginScreen from './app/components/login'
import Converter from './app/components/converter'
import Gallery from './app/components/gallery'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/components/home';
import ContactScreen from './app/components/contact'

const MainNavigator = createStackNavigator({
  // Home: { screen: HomeScreen },
  Contact:{screen: ContactScreen},
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Converter: { screen: Converter },
  Gallery: { screen: Gallery },


});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {


  render() {
    return (
      <AppContainer />
      // <Fragment>

      //     {/* <SignUp></SignUp> */}
      //     {/* <SignIn></SignIn> */}
      //     {/* <Converter></Converter> */}
      //     {/* <Gallery></Gallery> */}
      // </Fragment>
    );
  }

}



export default App;
