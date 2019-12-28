import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class CycleView extends React.Component {

  render() {
    // console.log(this.props.navigation.dangerouslyGetParent().state.routes)
    return(
      <View>
        <Text>My Tracker Cycle View</Text>
        <Button title='Calendar >' onPress={() => this.props.navigation.navigate('Calendar')} />
        <Button title='EditData' onPress={() => this.props.navigation.navigate('EditData')} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(CycleView);
