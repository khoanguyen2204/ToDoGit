import React,{Component} from 'react'
import {TouchableOpacity,View,Text} from 'react-native'


class Controller extends Component{

    render(){
        const { add,del } = this.props
        return(
            <View style ={{flex:1,flexDirection : 'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                    onPress={add}
                    style={{backgroundColor: 'lightgreen',borderRadius:5,marginRight:5,}}>
                    <Text style = {{fontSize:40}}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Controller;