import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

class NextButton extends React.Component {

  pressSecretary = () => {
    // function call to save any selections/inputs, then navigate
    // this.saveData()
    this.props.nav.navigate(this.props.nextRoute)
  };

   render() {
     return(
       <TouchableOpacity onPress={this.pressSecretary}>
         <Text style={styles.buttonText}>Next</Text>
       </TouchableOpacity>
     )
   };
}

const offset = 24;
const styles = StyleSheet.create({
    buttonText: {
      marginLeft: offset,
      fontSize: offset
    }
  ,});

  export default NextButton;
