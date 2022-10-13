import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CTEXT } from '../../elements/custom';

interface Props {}

const DRAWER: React.FC<Props> = () => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={{padding: 10, backgroundColor:'#E4E5E4'}}>
      <CTEXT style={{fontSize: 16, fontWeight:'bold'}}>{'Menues'}</CTEXT>
    </View>

    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CTEXT>{'CheckBox'}</CTEXT>
    </View>

    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CTEXT>{'Radio Button'}</CTEXT>
    </View>


  </SafeAreaView>
);

export default DRAWER;
