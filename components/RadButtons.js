import React from 'react';
// import { RadioButtons } from 'react-native-radio-buttons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  }
});

class RadButtons extends React.Component {
  state = { value: null }

  render() {
    const options = [
      {key: 't', text: 'tampon'},
      {key: 'p', text: 'pad'},
      {key: 'e', text: 'either'}
    ];
    const { value } = this.state;

    this.pressSecretary = (item) => {
      this.setState({ value: item.key })
      this.props.onSelection(item)
    };

    return (
      <View>
        {options.map(item => {
          return (
            <View key={item.key} style={styles.buttonContainer}>
              <Text>{item.text}</Text>
              <TouchableOpacity style={styles.circle}
                onPress={() => this.pressSecretary(item)}>
                  { value === item.key && (<View style={styles.checkedCircle} />) }
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
  )};
}

export default RadButtons;
