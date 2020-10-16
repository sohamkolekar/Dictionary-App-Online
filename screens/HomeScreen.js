import React, { Component } from 'react';
import db from '../config'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Heading from '../components/header';


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text:'',
      word:'',
      definition:'',
      lexicalCategory:'',
    };
    
  }

  goToBugScreen=()=>{
    this.props.navigation.navigate("BugScreen")
    console.log("hi")
  }

  getWord = (word) => {
    var searchKeyword = word.toLowerCase()
    var url =
      'https://rupinwhitehatjr.github.io/dictionary/' + searchKeyword + '.json';
    console.log("ho");
    return fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        } else {
          return null;
        }
      })
      .then((response) => {
        var responseObject = response;
        if (responseObject) {
          var wordData = responseObject.definitions[0];
          var definition = wordData.description;
          var lexicalCategory = wordData.wordtype;

          this.setState({
            word: this.state.text,
            definition: definition,
            lexicalCategory: lexicalCategory,
          });
        } else {
          wordIndex=wordIndex+1
          var wordRef="bugWordsFromMe/Word"+wordIndex
          db.ref(wordRef).update({
            word:this.state.text
          })
          this.setState({
            word: this.state.text,
            definition: 'not Found',
          });
        }
      });
  };
  render() {
    return (
      <View>
        <Heading />
        
        <TextInput
          style={{
            width: 200,
            height: 50,
            marginLeft: 50,
            borderWidth: 3,
            marginTop:30
          }}
          onChangeText={text => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

       
        <Text
        style={{marginTop:20}}>Word: {this.state.word}</Text>
       

        <Text
        style={{marginTop:20}}>Definition:{this.state.definition}</Text>

        <Text
        style={{marginTop:20}}>Type:{this.state.lexicalCategory}</Text>
        
        <Text
        style={{
          fontSize:20,
          marginStart:80,
          marginTop:20
        }}> Didnt find a word? </Text>

        <TouchableOpacity
        style={styles.bugbutton}
        onPress={()=>
        this.goToBugScreen()
        }>
         <Text
         style={styles.bugText}
         >Find</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

var wordIndex=0
const styles = StyleSheet.create({
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
  bugbutton:{
    width:60,
    height:25,
    borderColor:"grey",
    borderWidth:3,
    backgroundColor:"orange",
    marginStart:130
  },
  bugText:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:5,
    marginTop:-5
  }
});
