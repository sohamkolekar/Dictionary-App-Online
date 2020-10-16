
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import BugScreen from './screens/BugScreen'

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>

      </View>
    );
  }
}

var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  BugScreen:BugScreen
})

const AppContainer=createAppContainer(AppNavigator)

const styles = StyleSheet.create({
 
});
 