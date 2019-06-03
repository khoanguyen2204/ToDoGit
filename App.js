

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'


const defaultState = {
  arrtodos: [],

}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['arrtodos']
}

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
      return {
        ...state,
        arrtodos: state.arrtodos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              tillte: action.textChange
            }
          }
          return todo
        })
      }
    default:
      return {
        ...state
      }
      break
  }
  return state;
};

const PersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(PersistReducer)
const persistor = persistStore(store)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <AddTodo />
            <TodoList />
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
