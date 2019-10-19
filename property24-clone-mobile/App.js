import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './Components/TabNavigator';
import colors from './Constants/colors';

//Redux store
import store from './Redux/store';
import {Provider} from 'react-redux';

//Screens used
import Signup from './Screens/Signup';
import ViewListings from './Screens/ViewListings';
import UserProfile from './Screens/UserProfile';
import Login from './Screens/Login';
import SplashScreen from './Screens/SplashScreen';
import CreateListing from './Screens/CreateListing';
import ViewListing from './Screens/ViewListing';
import EditListing from './Screens/EditListing';


const RootStack = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions: {header: null}},
    Signup: {screen: Signup, navigationOptions: {title: "Sign up"}},
    ViewListings: {screen: TabNavigator, navigationOptions: {headerStyle: {backgroundColor: colors.primary}, headerLeft: null, title: "Property24", headerTintColor: colors.white}},
    UserProfile: {screen: UserProfile, title: "User Profile"},
    SplashScreen: {screen: SplashScreen, navigationOptions: {header: null}},
    CreateListing: {screen: CreateListing, navigationOptions: {title: "Create a Listing"}},
    ViewListing: {screen: ViewListing,},
    EditListing: {screen: EditListing}
    
  },

  {
    initialRouteName: 'SplashScreen',
  }
);



const AppContainer = createAppContainer(RootStack);



export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
