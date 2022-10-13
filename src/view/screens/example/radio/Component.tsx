import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { GLOBAL } from '../../../styles/global';
import { CTEXT } from '../../../elements/custom';

import { Props } from './index';

const RadioExample: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <CTEXT>{'Add Radio here'}</CTEXT>
  </SafeAreaView>
);

export default RadioExample;
