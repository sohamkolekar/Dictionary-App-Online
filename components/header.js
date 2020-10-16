import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
 
class Heading extends React.Component{
    render(){
        return(
            <View>
                <Header
                    backgroundColor="red"
                    centerComponent={{text:'Word Word',style:{color:"white",fontSize:20}}}
                />
            </View>
        );
    }
}

export default Heading