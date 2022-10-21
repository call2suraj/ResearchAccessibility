import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { GLOBAL } from '../../../styles/global';
import { CTEXT } from '../../../elements/custom';

import { Props } from './index';

import MyButton from '../../../elements/MyButton';
const ButtonExample: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <CTEXT>{'Button Example'}</CTEXT>
    <MyButton />
  </SafeAreaView>
);

export default ButtonExample;
