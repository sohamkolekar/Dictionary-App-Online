import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

class BugButton extends React.Component{
  goToBugScreen=()=>{
    this.props.navigation.navigate("BugScreen")
  }
  render(){
    return(
      <View>
      <TouchableOpacity
      style={{
        width:80,
        height:40,
        borderColor:"orange",
        borderWidth:3
      }}
      onPress={()=>{
        this.goToBugScreen()
      }}>
      <Text 
      style={{
        fontSize:20,
        fontWeight:'bold'
      }}>Find</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default BugButton
