import React, { Component, createRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Pressable
} from 'react-native';

import { CTEXT } from './custom';

export default class MyButton extends Component {

  constructor(props: any) {
    super(props);
    this.state = { hasFocus: false, backgroundColor: '#ededed', color: 'white', btnBackgroundColor: 'red', focused: false };
  }

  onFocus() {
    console.log("focus clicked")
    this.setState({
      backgroundColor: '#C6E8C0'
    })
  }

  onBlur() {
    this.setState({
      backgroundColor: '#ededed'
    })
  }

  onClick() {
    this.setState({
      btnBackgroundColor: '#F0D262'
    })
  }
  onBtnPress() {
    Alert.alert('pressed')
    this.setState({
      btnBackgroundColor: '#44BFEA',
      color: 'black'
    })
  }

  onTxtPress() {
    Alert.alert('pressed')
    this.setState({
      btnBackgroundColor: '#8C33D3',
      color: 'black'
    })
  }

  onBtnFocus() {
    Alert.alert("focus clicked")
    this.setState({
      btnBackgroundColor: '#3074EC'
    })
  }

  onPressFunction() {
    this.setState({
      focused: !this.state.focused
    })
  }
  render() {
    const myElement = createRef();
    return (
      <View>
        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'Text Input Example'}</CTEXT>
          <TextInput
            onBlur={() => this.onBlur()}
            onFocus={() => this.onFocus()}
            style={{ height: 40, backgroundColor: this.state.backgroundColor, color: this.state.color }} />
        </View>

        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'Text Button Example'}</CTEXT>
          <TouchableOpacity
            accessible={true}
            ref={myElement}
            onFocus={() => this.onBtnFocus()}
            onAccessibilityAction={() => this.onClick()}
            accessibilityLabel="Go back"
            accessibilityHint="Hint Double Tab"
            accessibilityRole="button"
          >
            <Text style={{ height: 30, backgroundColor: this.state.btnBackgroundColor, color: this.state.color }}
              onPress={() => this.onTxtPress()}>Click Me!</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'React Native Button Example'}</CTEXT>
          <Button
            title="Test button"
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Hint button type"
            accessibilityRole="button"
            onPress={() => this.onBtnPress()}
          />
        </View>

        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'Pressable React Native Button Example'}</CTEXT>
          <Pressable
            onPress={() => this.onPressFunction()}
            style={{ backgroundColor: this.state.focused ? 'red' : 'grey', height: 30 }}
            accessibilityLabel="Pressable Label"
            accessibilityHint="Hint Pressable"
            accessibilityRole="button"
          >
            <Text>Press Me</Text>
          </Pressable>
        </View>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftText: {
    flex: 1,
  },
  rightText: {
    flex: 1,
    marginLeft: 10
  }
});
