import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, SafeAreaView, View, Text, TouchableOpacity, Alert, Button } from 'react-native';


import { GLOBAL } from '../../../styles/global';
import { CTEXT } from '../../../elements/custom';
import Accordion from './Accordion';
import FedInFedOut from './FedInFedOut';
import InnerComponent from './InnerComponent';
import Bouncing from './Bouncing'
import { Props } from './index';

const AnimationExample: React.FC<Props> = (props: Props) => {
  const [translation, setTranslation] = useState(0);

  const translationTwo = useRef(
    new Animated.Value(0)
  ).current;

  const translationThree = useRef(
    new Animated.Value(0)
  ).current;
  
  useEffect(() => {
    Animated.timing(translationThree, {
      toValue: 100,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);


  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 30 * i);
    }
  }, []);

  useEffect(() => {
    Animated.timing(translationTwo, {
      toValue: 100,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flexDirection: 'column' }}>
      <View
        style={{
          width: 100,
          height: 50,
          marginBottom: 10,
          backgroundColor: 'orange',
          transform: [{ translateX: translation }],
        }}
      >
        <Button
          title="Animated Button"
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Hint button type"
          accessibilityRole="button"
          onPress={() => Alert.alert('pressed')}
        />
      </View>

      <View>
      <Accordion headerText="Unavailable Test" 
      headerBody={<InnerComponent myprop={'animation'}/>} 
      isCollapse={true} 
      bgcolor={'#EEEEEE'}/>
      </View>

      <View style={{ marginTop: 2 }}>
        <FedInFedOut />
      </View>
      <View>
      <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        transform: [{ translateX: translationThree }],
      }}
    />
      </View>
      <View>
        < Bouncing />
      </View>

      <Animated.View
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'orange',
          transform: [{ translateY: translationTwo }],
        }}
      >
        <Button
          title="Bouncing Button"
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Hint button type"
          accessibilityRole="button"
          onPress={() => Alert.alert('pressed')}
        />
      </Animated.View>



    </View>

  );
}

export default AnimationExample;
