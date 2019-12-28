import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
// import Fire from './Fire';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class Forum extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   title: (navigation.state.params || {}).name || 'Loading!'
  // });

  state = {
    messages: []
  }

  componentDidMount() {
    console.log("forum mounted")
    // Fire.shared.on(message =>
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message)
    //   })
    //   ))
  };

  componentWillUnmount() {
    // Fire.shared.off()
  };

  get user() {
    return { name: this.props.user.name }
    // , _id: Fire.shared.uid }
  };

  render() {
    return (
      <View>
        <Text>Community Forum View</Text>
      </View>
    )};
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(Forum);
