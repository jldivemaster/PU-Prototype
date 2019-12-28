import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class EditData extends React.Component {

  render() {
    return(
      <View>
        <Text>Edit Tracker Data Here</Text>
        <Button title='Calendar >' onPress={() => this.props.navigation.navigate('Calendar')} />
        <Button title='< Cycle' onPress={() => this.props.navigation.navigate('Cycle')} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(EditData);
