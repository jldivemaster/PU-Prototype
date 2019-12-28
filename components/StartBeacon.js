import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CancelBeacon from './CancelBeacon';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class StartBeacon extends React.Component {

  pressSecretary = () => {
    this.props.navigation.navigate('Map')
  }

  // cancelBeacon = () => {
  //   this.props.navigation.navigate('Profile')
  // }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Begin Beacon View - Select Product to Continue:</Text>
        <CancelBeacon nav={this.props.navigation}/>
        <TouchableOpacity onPress={this.pressSecretary}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
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

export default connect(mapStateToProps)(StartBeacon);
