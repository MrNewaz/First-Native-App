import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-circle.png')}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
        icon='email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        name='password'
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
