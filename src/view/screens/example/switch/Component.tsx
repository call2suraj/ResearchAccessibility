import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { GLOBAL } from '../../../styles/global';
import { CTEXT } from '../../../elements/custom';
import MySwitch from '../../../elements/MySwitch';
import { Props } from './index';

const Switchxample: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <CTEXT>{'Add Switchxample here'}</CTEXT>
    <MySwitch />
  </SafeAreaView>
);

export default Switchxample;
