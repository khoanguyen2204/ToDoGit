import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { returnStatement } from '@babel/types';


class TodoItem extends Component {

    // settext = (tittle) => {
    //     this.props.dispatch({
    //         type: "SET_TEXT",
    //         data: tittle
    //     })
    // }

    render() {
        // const {tittle,id,selected}  = this.props.word
        const { tillte, id } = this.props.word
        const  index  = this.props.index
        const {del,edit} = this.props
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1 }}
            // onPress={() => {
            //     select
            //     // settext
            // }}
            >
                <Text style={{ fontSize: 25, margin: 5, flex: 8 }}>{tillte}</Text>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', borderRadius: 3, justifyContent: 'center', alignContent: 'center' }}
                    onPress={
                        // () => {this.props.del(index)}
                        del
                    }>
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

const mapStateToProps = state => {
    return {}

}
const mapDispatchToProps = dispatch => {
    return {
        // del: (index) => dispatch({
        //     type: "DEL",
        //     index
        // }),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)