import React from 'react';
import {TextInput,StyleSheet} from 'react-native'

class TextIn extends React.Component{
    constructor(){
      super();
      this.state={
        text:""
      }
    }
    render(){
        return(
            <TextInput
            style={{
                width:200,
                height:50,
                marginLeft:50,
                borderWidth:3
            }}
            onChangeText={ text =>{
                this.setState({
                    text:text
                })
            
             }
            }
            value={this.state.text}
            />

            
        );
    }
}

const styles=StyleSheet.create({
    
})

export default TextIn