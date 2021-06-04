import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-circle.png')}
      />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              placeholder='Email'
              icon='email'
              textContentType='emailAddress'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              name='password'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
