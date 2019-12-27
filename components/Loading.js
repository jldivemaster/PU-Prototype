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

        if(this.props.isSignedIn) {
          this.props.navigation.navigate('Main')
        } else {
          this.props.navigation.navigate('Login')
        }
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
