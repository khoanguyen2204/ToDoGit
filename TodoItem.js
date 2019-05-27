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
        const {tittle}  = this.props.word
        return (
            <TouchableOpacity onPress={()=>this.props.selected()}>
                <Text style={{ fontSize: 25,margin:5,color:this.props.selected? 'gray':'red'}}>{tittle}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state =>({
    selected: state.selected,
    
})

const mapDispatchToProps = (dispatch) => {
    return {   
        settext: (tittle) => dispatch({
			type: "SET_TEXT",
			data: tittle
      }),
        selected: () => dispatch({
            type:"SELECTED"
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)