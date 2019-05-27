

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const defaultState ={
    arrtodos:[
      {id:1,tittle:'abc',selected: false,},
      {id:2,tittle:'xyz',selected: false},
    ],
    text: '',
  }

function reducer (state = defaultState, action){
  switch(action.type){
    case "ADD":
      return{
        ...state,
        arrtodos: [{
          id: state.arrtodos.length +1,
          tittle: action.data,
          selected: false,
        }].concat(state.arrtodos)
      };
    case "SET_TEXT":
      return{
        ...state,
        text: action.data,
      };
      case "SELECTED":
      return{
        ...state,
        selected: !state.selected
      };
    default:
      break
  }
  return state;
};

const store = createStore(reducer)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodo/>
          <TodoList/>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
