

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: this.props.todos,
  //   };
  // }



  render() {
    console.log(this.props.todos)
    return (
      <View style={styles.listtodocontainer}>
        <FlatList
          data={this.props.todos}
          renderItem={({ item, index }) => <TodoItem word={item} index={index}

            // select={() => { this.props.selected(index) }}
            // settext={() => { this.props.settext(item.tittle) }}

          />}
          
          // extraData={this.state.todos}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
  componentDidMount(){
    console.log(JSON.stringify(this.props.todos))
  }
  componentDidUpdate(){
    console.log('chay toi day')
  }
};


const mapStateToProps = state => {

  return {
    todos: state.arrtodos
  }
}
const mapDispatchToProps = (dispatch) => ({

  // settext: (tittle) => dispatch({
  //   type: "SET_TEXT",
  //   data: tittle
  // }),
  // selected: (index) => dispatch({
  //   type: "SELECTED",
  //   index
  // })

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

const styles = StyleSheet.create({
  listtodocontainer: {
    margin: 5,
    flex: 3,
    backgroundColor: '#e2e9f1',
    borderRadius: 5,
  },
});
