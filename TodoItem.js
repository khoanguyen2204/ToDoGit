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
        const {tittle,id,selected}  = this.props.word
        return (
            <TouchableOpacity onPress={()=>{this.props.selected(id);this.props.settext(tittle)}}>
                <Text style={{ fontSize: 25,margin:5,color: selected? 'red':'gray'}}>{tittle}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state =>({

    
})

const mapDispatchToProps = (dispatch) => {
    return {   
        settext: (tittle) => dispatch({
			type: "SET_TEXT",
			data: tittle
      }),
        selected: (id) => dispatch({
            type:"SELECTED",
            id,
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)