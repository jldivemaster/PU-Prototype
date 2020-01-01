import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';


const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class CalendarView extends React.Component {

  render() {
    return(
      <View>
        <Text>My Tracker Calendar View</Text>
        <CalendarPicker />
      </View>
    )
  }
}

export default connect(mapStateToProps)(CalendarView);
