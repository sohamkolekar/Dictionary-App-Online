import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'

class Search extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.getWord(this.state.text)
                }}
                >
                    <Text
                    style={styles.buttonText}
                    >
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    button:{
        width:150,
        height:40,
        borderWidth:5,
        borderColor:"grey",
        marginTop:50,
        marginLeft:100
    },
    buttonText:{
        marginTop:-10,
        marginLeft:20,
        fontSize:30,
        fontWeight:'bold'
    }
})

export default Search