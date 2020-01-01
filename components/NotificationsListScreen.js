import React from 'react';
import { View, Text } from 'react-native';

class NotificationsListScreen extends React.Component {
  // List Push Notifications Received (from App and/or Users?)

  renderList() {
    return (
      <Text>List of Notifications I've Received</Text>
    )
  };

  render() {
    return(
      <View>
        {this.renderList()}
      </View>
    )
  };
}

export default NotificationsListScreen;
