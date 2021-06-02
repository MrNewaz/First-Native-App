import React from 'react';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <ListItem
        title='My Title'
        // subTitle='My Subtitle'
        ImageComponent={<Icon name='email' />}
      />
    </Screen>
  );
}
