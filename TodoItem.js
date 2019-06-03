import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'



class TodoItem extends Component {


    render() {
        const { tillte, id } = this.props.word
        const index = this.props.index
        const { del, edit } = this.props
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1 }}
            >
                <Text style={{ fontSize: 25, margin: 5, flex: 8 }}>{tillte}</Text>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', borderRadius: 3, justifyContent: 'center', alignContent: 'center' }}
                    onPress={del}
                >
                    <Text style={{ fontSize: 20 }}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'orange', borderRadius: 3, justifyContent: 'center', alignContent: 'center' }}
                    onPress={edit}
                >
                    <Text style={{ fontSize: 20 }}>Edit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default TodoItem