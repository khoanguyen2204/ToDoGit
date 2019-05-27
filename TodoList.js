

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
import {connect} from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <View style={styles.listtodocontainer}>
        <FlatList
          data={this.props.todos}
          renderItem={({item})=><TodoItem word={item}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
    return{
      todos:state.arrtodos
    }
    
  
}
const mapDispatchToProps = ()=>{
  
}

export default connect (mapStateToProps)(TodoList)

const styles = StyleSheet.create({
    listtodocontainer: {
        margin:5,
        flex : 3,
        backgroundColor: '#e2e9f1',
        borderRadius: 5,
},
});
