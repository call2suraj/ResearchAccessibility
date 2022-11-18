import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, View, Alert, Button } from 'react-native';

import FedInFedOut from '../example/animation/FedInFedOut';
import { Props } from './index';

const ANIMATION: React.FC<Props> = (props: Props) => {
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
      delay: 900,
      useNativeDriver: true,
    }).start();
  }, []);


  useEffect(() => {
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 70 * i);
    }
  }, []);

  useEffect(() => {
    Animated.timing(translationTwo, {
      toValue: 150,
      easing: Easing.bounce,
      duration: 1900,
      delay: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <View style={{ marginTop: 2 }}>
        <FedInFedOut />
      </View>

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
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            transform: [{ translateX: translationThree }],
          }}
        />
      </View>

      <Animated.View
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'red',
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

export default ANIMATION;
