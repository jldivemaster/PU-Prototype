import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CancelButton extends React.Component {

  handleCancelBeacon = () => {
    // Navigate to Home Screen (leaving beacon stack), clear out Beacon data object, & alert user of cancellation!

    this.props.nav.navigate('Profile')
    // this.clearBeaconData().....
    alert("Beacon Cancelled")
  }

   render() {
     return(
     <TouchableOpacity onPress={this.handleCancelBeacon}>
       <Text style={styles.buttonText}>Cancel</Text>
     </TouchableOpacity>
   )}
}

const offset = 24;
const styles = StyleSheet.create({
    buttonText: {
      marginLeft: offset,
      fontSize: offset,
      color: 'red'
    }
  });

export default CancelButton;
