import * as React from 'react';
import {View,TextInput,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import db from '../config'

export default class BugScreen extends React.Component{
  constructor(){
    super();
    this.state={
      text:'',
      displayText:""
    }
  }
  getBugWord=()=>{
     bugwordIndex=bugwordIndex+1
     var bugWordRef="bugWordsFromUser/Word"+bugwordIndex
       db.ref(bugWordRef).update({
       word:this.state.text
     })
  }
  goToHomeScreen=()=>{
    this.props.navigation.navigate("HomeScreen")
  }
  textup=(word)=>{

  }
 
  render(){
    if(this.state.displayText==="true"){
      return(
        <View>
            <Text>Thank you for your response .
             We will try to find your word.</Text>           
            <TouchableOpacity
              onPress={()=>
              this.goToHomeScreen()}>
              <Image
              style={{
                width:30,
                height:30
              }}
              source={require('../assets/backbutton.jpg')}/>
            </TouchableOpacity>
        </View>
       )
    }
    return(
      <View>
      type your unfound word
       <TextInput
          style={{
            width: 200,
            height: 50,
            marginLeft: 50,
            borderWidth: 3,
            marginTop:30
          }}
          onChangeText={text=>{
            this.setState({
              text:text
            })
          }}
          />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.getBugWord()
            this.setState({
              displayText:"true"
            })
          }}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>  

        

        <TouchableOpacity
        onPress={()=>
        this.goToHomeScreen()}>
          <Image
          style={{
            width:30,
            height:30
          }}
          source={require('../assets/backbutton.jpg')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

var bugwordIndex=0
 const styles=StyleSheet.create({
   button: {
    width: 150,
    height: 40,
    borderWidth: 5,
    borderColor: 'grey',
    marginTop: 20,
    marginLeft: 80,
  },
  buttonText: {
    marginTop: -10,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
 })