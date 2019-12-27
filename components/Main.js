import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
// import Header from './Header';
class Main extends Component {
  state = { name: '' }

handleNameInput = name => this.setState({ name });

pressSecretary = () => {
  this.props.navigation.navigate('Chat', { name: this.state.name })
};

  render() {
    return (
      <View>

        <Text style={styles.title}>Name Input:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Enter Name'
          value={this.state.name}
          onChangeText={this.handleNameInput}
        />
        <TouchableOpacity onPress={this.pressSecretary}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({nameInput: { // 3. <- Add a style for the input
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1
    },
    title: {
      marginTop: offset,
      marginLeft: offset,
      fontSize: offset
    },
    buttonText: {
      marginLeft: offset,
      fontSize: offset
    }
  ,});
export default Main;
