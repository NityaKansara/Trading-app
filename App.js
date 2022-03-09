import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from "./screens/login";
import Donate from "./screens/donation";
import Request from "./screens/request";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import ProfileScreen from './screens/profile';
export default class App extends React.Component {
  render(){
  return (
    <ProfileScreen/>
  );
}
}
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:Login},
  DonationScreen:{screen:Donate}
})
const AppContainer=createAppContainer(SwitchNavigator)
