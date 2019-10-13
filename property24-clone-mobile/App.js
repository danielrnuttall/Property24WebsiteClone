import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './Components/TabNavigator';
import colors from './Constants/colors';

//Screens used
import Signup from './Screens/Signup';
import ViewListings from './Screens/ViewListings';
import UserProfile from './Screens/UserProfile';
import Login from './Screens/Login';
import SplashScreen from './Screens/SplashScreen';
import CreateListing from './Screens/CreateListing';



const RootStack = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions: {header: null}},
    Signup: {screen: Signup, navigationOptions: {title: "Sign up"}},
    ViewListings: {screen: TabNavigator, navigationOptions: {headerStyle: {backgroundColor: colors.primary}, headerLeft: null, title: "Property24", headerTintColor: colors.white}},
    UserProfile: {screen: UserProfile, title: "User Profile"},
    SplashScreen: {screen: SplashScreen, navigationOptions: {header: null}},
    CreateListing: {screen: CreateListing, navigationOptions: {title: "Create a Listing"}}
    
  },

  {
    initialRouteName: 'Login',
  }
);



const AppContainer = createAppContainer(RootStack);



export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


