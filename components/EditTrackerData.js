import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class EditTrackerData extends React.Component {

  render() {
    return(
      <View>
        <Text>Edit Tracker Data Here</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps)(EditTrackerData);
