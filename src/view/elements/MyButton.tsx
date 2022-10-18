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
  Alert
} from 'react-native';

import { CTEXT } from './custom';

export default class MyButton extends Component {

  constructor(props: any) {
    super(props);
    this.state = { hasFocus: false, backgroundColor: '#ededed', color: 'white', btnBackgroundColor: 'red', };
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
    console.log("focus clicked")
    this.setState({
      btnBackgroundColor: '#3074EC'
    })
  }
  render() {
    const myElement = createRef();
    return (
      <View>
        <CTEXT>{'Text Input Example'}</CTEXT>
        <TextInput
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          style={{ height: 40, backgroundColor: this.state.backgroundColor, color: this.state.color }} />

        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'Text Example'}</CTEXT>
          <TouchableOpacity
            accessible={true}
            ref={myElement}
            onFocus={() => this.onBtnFocus()}
            onAccessibilityAction={() => this.onClick()}
          >
            <Text style={{ height: 30, backgroundColor: this.state.btnBackgroundColor, color: this.state.color }}
              onPress={() => this.onTxtPress()}>Click Me!</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 15 }}>
          <CTEXT>{'Button Example'}</CTEXT>

          <Button
            title="Right button"
            onPress={() => this.onBtnPress()}
          />
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
