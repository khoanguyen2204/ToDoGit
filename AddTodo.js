

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput
} from 'react-native';
import Controller from './Controller'
import { connect } from 'react-redux'


class AddTodo extends Component {
	state = {
		textinput: ''
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					value={this.state.textinput}
					onChangeText={(text) => this.setState({ textinput: text })}
					style={{ backgroundColor: 'lightgray', borderRadius: 5, fontSize: 25, }} />
				<Controller
					add={() => {
						this.props.add(this.state.textinput)
						this.setState({ textinput: '' })
					}}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => {
	return {
		textinput: state.text,
		index: state.index,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		add: (data) => dispatch({
			type: "ADD",
			data
		}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		backgroundColor: 'white',
	},

	textinput: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'lightgray',
	},

});
