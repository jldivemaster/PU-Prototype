import React from 'react';
import { View, Text, Button } from 'react-native';

class SubmitButton extends React.Component {
// This button is currently only used to exit a stack navigator.

  onSubmit  = () => {
    // Submit/save any data change, notify user, and navigate
    // this.saveData()
    if(this.props.alertMessage){
      alert(this.props.alertMessage)
    }
    this.props.nav.navigate(this.props.newRoute)
  };

  render() {
    return(
      <Button title={this.props.buttonText} onPress={this.onSubmit}/>
    )
  }
}

export default SubmitButton;
