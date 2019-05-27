import React,{Component} from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import {connect} from 'react-redux'

class Controller extends Component{

    addTodo = (text) => {
        this.props.dispatch({
            type: "ADD",
            data: text
        })
    }

    render(){
        const { add } = this.props
        return(
            <View style ={{flex:1,flexDirection : 'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                    onPress={add}
                    style={{backgroundColor: 'lightgreen',borderRadius:5,marginRight:5,}}>
                    <Text style = {{fontSize:40}}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: 'red',borderRadius:5,marginRight:5,}}>
                    <Text style = {{fontSize:40}}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: 'orange',borderRadius:5,marginRight:5,}}>
                    <Text style = {{fontSize:40}}>Edit</Text>    
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(Controller)