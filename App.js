

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import { tsImportType } from '@babel/types';




const defaultState = {
  arrtodos: [
    // {id:1,tillte:'abc'},
    // {id:2,tillte:'xyz'}
  ],
  text: '',
  // index: -1,
}

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['arrtodos']
// }

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        arrtodos: state.arrtodos.concat(
          {
            id: state.arrtodos.length + 1,
            tillte: action.data,
          }
        )
      };
    case "DEL":
      var filtered = state.arrtodos.filter(function (value, index, arr) {
        return index !== action.index;
      });
      return {
        ...state,
        arrtodos: filtered,
      }
    case "EDIT":
      console.log(action.index)
      console.log(action.textChange)
      return {
        ...state,
        arrtodos: state.arrtodos.splice(action.index,1,{tillte:action.textChange})
      }
    // case "SELECTED":
    //   console.log(action.index)
    // return{
    //   ...state,
    //   index: action.index
    // }

    default:
      break
  }
  return state;
};

// const PersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(reducer)
// const persistor = persistStore(store)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <View style={styles.container}>
            <AddTodo />
            <TodoList />
          </View>
        {/* </PersistGate> */}
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
