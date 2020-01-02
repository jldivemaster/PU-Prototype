import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
// import Header from './Header';
import CycleComponent from './CycleComponent';
import SelectButton from './SelectButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ user: state.auth.user })
}

class Profile extends Component {
  // TODO: Render My Profile Info
  // Details are editable (each with own edit button or 'Edit All')
  // Start Beacon button in addition to bottom tab?
  // Nav to Inbox/Activity/ActiveBeacon from here and/or in bottom tabs??
  

//   state = { name: '' }
//
// handleNameInput = name => this.setState({ name });

pressSecretary = () => {
  this.props.navigation.navigate('Forum', { name: this.props.user.name })
};

  render() {
    let user = this.props.user
    console.log("main mounted", this.props)
    return (
      <View style={{ flex: 1 }}>

        <Text style={styles.title}>Main Profile View
        <CycleComponent width='300' height='240' hideLegend='true' />
        </Text>
        <SelectButton buttonText='View Active Beacon' nextRoute='ActiveBeaconScreen' nav={this.props.navigation}/>

      </View>
    );
  }
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
export default connect(mapStateToProps)(Profile);
