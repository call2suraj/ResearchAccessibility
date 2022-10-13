import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CTEXT } from '../../elements/custom';

import { Props } from './index';

import CheckBoxExample from '../../screens/example/checkbox/index';
import RadioExample from '../../screens/example/radio/index';

const DUMMY: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    {
      props.id === 'CheckBox' ? <CheckBoxExample /> : null
    }

    {
      props.id === 'Radio' ? <RadioExample /> : null
    }

    {
      props.id === 'Others' ? <CheckBoxExample /> : null
    }
  </SafeAreaView>
);

export default DUMMY;
