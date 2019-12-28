import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class CalendarView extends React.Component {

  render() {
    return(
      <View>
        <Text>My Tracker Calendar View</Text>
        <Button title='Cycle >' onPress={() => this.props.navigation.navigate('Cycle')} />
        <Button title='EditData' onPress={() => this.props.navigation.navigate('EditData')} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(CalendarView);
