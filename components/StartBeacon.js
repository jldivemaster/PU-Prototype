import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createBeacon } from '../actions'
import CancelButton from './CancelBeacon';
import NextButton from './NextButton';
import RadButtons from './RadButtons';

// Prepopulating Beacon Object for temp data visuals:
const mapStateToProps = (state) => {
  return ({ user: state.auth, beacon: state.beacon })
};

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset
  }
});

class StartBeacon extends React.Component {
  // TODO:
  // Create initial Beacon object with current user, selected product type, status = 'pending'

  // Save initial Beacon to Redux store (createBeacon)
  // Get user geolocation and query for nearby responders (save filtered list of these users)
  // Navigate to Location Screen
  // Cancel Beacon button? or just can back out?

  state = { value: null }

  addSelection = (selection) => {
    console.log('adding', selection.text, 'to', this.props.beacon.product)
    this.setState({ value: selection })
  };

  saveSelection = () => {
    // console.log('saving', this.state.value.text, 'to', this.props.beacon.product)
    let input = { user: {...this.props.user}, productType: this.state.value.text }
    // console.log(productType)
    this.props.createBeacon(input)
    this.props.navigation.navigate('LocationScreen')
    // set state.value to Redux Beacon Obj
  }

  render() {
    // console.log(this.props)
    return (
      <View>
        <Text>Welcome {this.props.user.name} - Select Product to Continue:</Text>
        <View style={styles.container}>
          <RadButtons value={this.state.value} onSelection={this.addSelection}/>
        </View>
        <TouchableOpacity onPress={this.saveSelection}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text>or Cancel Beacon below:</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default connect(mapStateToProps, { createBeacon })(StartBeacon);
