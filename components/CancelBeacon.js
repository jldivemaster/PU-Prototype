import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CancelBeacon extends React.Component {

  handleCancelBeacon = () => {
    this.props.nav.navigate('Profile')
    alert("Beacon Cancelled")
  }

   render() {
     console.log(this.props)
     return(
     <TouchableOpacity onPress={this.handleCancelBeacon}>
       <Text style={styles.buttonText}>Cancel</Text>
     </TouchableOpacity>
   )}
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

export default CancelBeacon;
