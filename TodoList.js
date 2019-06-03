

import React, { Component } from 'react';
import {  StyleSheet, View, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      visible: false,
      textChange: '',
      textIndex: null,
      index: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ todos: nextProps.todos })
  }

  render() {
    return (
      <View style={styles.listtodocontainer}>
        <FlatList
          data={this.state.todos}
          renderItem={({ item, index }) => <TodoItem word={item} index={index}

            del={() => { this.props.del(index) }}
            edit={() => { this.setState({ visible: true, index: index, textChange: item.tillte }) }}
          />
          }
          keyExtractor={item => item.toString()}
        />
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => { this.setState({ visible: false }) }}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => { this.setState({ visible: false, textChange: '' }) }}
              />
              <DialogButton
                text="OK"
                onPress={() => {
                  this.props.edit(this.state.textChange, this.state.index)
                  this.setState({ visible: false, textChange: '' })
                }}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <View style={{ width: 300, height: 200, justifyContent: 'center' }}>
              <TextInput
                value={this.state.textChange}
                onChangeText={(text) => this.setState({ textChange: text })}
                style={{ backgroundColor: 'lightgray', borderRadius: 5,fontSize:20 }}
              />
            </View>

          </DialogContent>
        </Dialog>
      </View>
    );
  }
};


const mapStateToProps = state => {

  return {
    todos: state.arrtodos
  }
}
const mapDispatchToProps = (dispatch) => ({

  del: (index) => dispatch({
    type: "DEL",
    index
  }),
  edit: (textChange, index) => dispatch({
    type: "EDIT",
    textChange,
    index,
  }),

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
