import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CTEXT } from '../../elements/custom';

import { Props } from './index';

import CheckBoxExample from '../../screens/example/checkbox/index';
import RadioExample from '../../screens/example/radio/index';
import ButtonExample from '../../screens/example/button/index';
import TextExample from '../../screens/example/text/index';

const DUMMY: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    {
      props.id === 'CheckBox' ? <CheckBoxExample /> : null
    }

    {
      props.id === 'Radio' ? <RadioExample /> : null
    }

    {
      props.id === 'Button' ? <ButtonExample /> : null
    }
    {
      props.id === 'Text' ? <TextExample /> : null
    }
  </SafeAreaView>
);

export default DUMMY;
