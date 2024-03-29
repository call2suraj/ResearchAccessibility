import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../styles/global';
import { CTEXT } from '../elements/custom';
import locale from '../../constants/locale';
import router from '../../navigators/router';
import { Card, Carousel } from '../elements/layout';
import { BUTTON_DEFAULT } from '../elements/buttons';

interface Props {
  componentId: string;
  title?: string;
}

const data = [
  { title: 'CheckBox', id: 'CheckBox' },
  { title: 'Radio', id: 'Radio' },
  { title: 'Button', id: 'Button' },
  { title: 'Text', id: 'Text' },
];

const Category: React.FC<Props> = ({ componentId, title }: Props) => {

  const renderItem = ({ item }: any) => {
    return (
      <View style={GLOBAL.ELEMENTS.CategoryIcons} key={`carousel-item-${item.title}`}>
        <BUTTON_DEFAULT
          title={item.title}
          onClick={
          () => router.showListingsScreen(
            { componentId, passProps: { query: item.title, id: item.id } },
            item.title,
          )}
        />
        {/* <CTEXT style={GLOBAL.FONTS.body}>{item.title}</CTEXT> */}
      </View>
    );
  };

  return (
    <Card>
      {title && <CTEXT style={GLOBAL.FONTS.h1}>{title}</CTEXT>}
      <Carousel data={data} item={renderItem} />
    </Card>
  );
};

export { Category };
