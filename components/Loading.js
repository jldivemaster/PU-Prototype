import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

const mapStateToProps =  (state) => {
  return ({ isSignedIn: state.auth.isSignedIn })
}

class Loading extends React.Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    // firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(this.props.isSignedIn ? 'Main' : 'Login')

      // )}
  };

  render() {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

export default connect(mapStateToProps)(Loading);
