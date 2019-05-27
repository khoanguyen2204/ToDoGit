

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {persistStore,persistReducer} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'


const defaultState ={
    arrtodos:[
      {id:1,tittle:'abc',selected: false,},
      {id:2,tittle:'xyz',selected: false},
    ],
    text: '',
  }

  const persistConfig = {
    key: 'root',
    storage,
    whitelist:['arrtodos']
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
        arrtodos: state.arrtodos.map(e=>{
          if(e.id !== action.id) return e;
          return {...e,selected: !e.selected};
        })
      };
      case "DEL":
        return{
          ...state,
          arrtodos:[],
        }
    default:
      break
  }
  return state;
};

const PersistReducer = persistReducer(persistConfig,reducer)
const store = createStore(PersistReducer)
const persistor = persistStore(store)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading = {null} persistor = {persistor}>
          <View style={styles.container}>
            <AddTodo/>
            <TodoList/>
          </View>
        </PersistGate>
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
