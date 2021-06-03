import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry
        onChangeText={(text) => setFirstName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
