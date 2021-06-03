import React from 'react';
import { Text, TextInput } from 'react-native';
import AppTextInput from './app/components/AppTextInput';

import Screen from './app/components/Screen';
import colors from './app/config/colors';

export default function App() {
  return (
    <Screen>
      <AppTextInput icon='email' placeholder='User Email' />
    </Screen>
  );
}
