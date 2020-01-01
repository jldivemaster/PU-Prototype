import React from 'react';
import { View, Text, Button } from 'react-native';

class SelectButton extends React.Component {

  onSubmit  = () => {
    // Submit/save any data change and navigate
    // this.saveData()
    this.props.nav.navigate(this.props.nextRoute)
  };

  render() {
    return(
      <Button title={this.props.buttonText} onPress={this.onSubmit}/>
    )
  }
}

export default SelectButton;
