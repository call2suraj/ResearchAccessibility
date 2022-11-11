import React, { Component } from 'react';
import {Text, View, StyleSheet,Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InnerComponent extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {isHidden: false, text: ''};
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({isHidden: !this.state.isHidden, text:''});
    // alert(this.state.isHidden);
  }
  onClickEvent(){
    alert("onClickEvent triggered");
  }
  render() {
    //alert("text "+ this.props.headerText);
    return (

    //     <Animated.View
    //     duration={400}
    //     style={[styles.content, isActive ? styles.active : styles.inactive]}
    //     transition="backgroundColor">
    //     <Animated.Text
    //       animation={isActive ? 'bounceIn' : undefined}
    //       style={{ textAlign: 'center' }}>
    //       {section.content}
    //     </Animated.Text>
    //   </Animated.View>


        <TouchableOpacity onPress={ this.onClickEvent} 
        style={{borderWidth:0, width:410,flexDirection:'column', height:84, backgroundColor:'grey', paddingLeft:16}}>
          <Text style={{color:'black'}}>text here {this.props.myprop}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  headerRight: {
    justifyContent:'flex-start',
    flexDirection:'row',
    borderWidth:1,
    paddingTop:25,
    flex: 1,
    margin:5,
    paddingLeft:0,

  },
  iconStyleRight:{
    paddingLeft:350,
    textAlign:'right',
    paddingTop:1,
    color:'black',

  },
  iconStyleLeft: {
    paddingLeft:33,
    textAlign:'right',

    marginRight:10,
    color:'white',

  }

});