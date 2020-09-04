import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
export default class App extends Component {
  render() {
    return (
      <View testID="mainView" style={{ alignItems: "center", justifyContent: "center", flex: 1 }} accessible={true} accessibilityLabel="mainView">
        <TextInput placeholder="enter email" placeholderTextColor="#fff" testID="textInput1" accessible={true} accessibilityLabel="textInput1" style={{ width: 200, height: 100, backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
        <TextInput placeholder="enter password" placeholderTextColor="#fff" testID="textInput2" accessible={true} accessibilityLabel="textInput2" style={{ width: 200, height: 100, backgroundColor: 'rgba(0,0,0,0.5)', marginTop: 20 }}
        />
        <TouchableOpacity testID="button" accessible={true} accessibilityLabel="button" style={{ width: 200, height: 100, backgroundColor: 'rgba(0,0,0,1)', marginTop: 20 }} />
      </View>
    )
  }
}
