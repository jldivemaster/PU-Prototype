import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

class Login extends React.Component {

  signIn = () => {
    // Call action creator to change State to Signed In
    this.props.signIn();
    this.props.navigation.navigate('Main')
  }

  signOut =  () => {
    this.props.signOut();
  }

  // signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Expo.Google.loginAsync({
  //       behavior: 'web',
  //       clientId: 'insert id',
  //       scopes: ['profile', 'email']
  //     });
  //
  //     if(result.type == 'success'){
  //       return result.accessToken
  //     } else {
  //       return { cancelled: true }
  //     }
  //   } catch (e) {
  //     return { error: true }
  //   }
  // }

  renderButton = () => {
    // if(this.props.isSignedIn === null){
    //   return null
    // } else
    if(this.props.isSignedIn){
      return (
        <Button title="Sign Out" onPress={this.signOut}/>
      )
    } else {
      return (
        <Button title="Sign In" onPress={this.signIn}/>
    )}
  }

  render() {
    return (
      <View>
        {this.renderButton()}
      </View>
    )
  }
}

export default connect(mapStateToProps, { signIn, signOut })(Login);
