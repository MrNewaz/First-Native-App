import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
import jwtDecode from 'jwt-decode';

import Screen from '../components/Screen';
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import authApi from '../api/auth';
import AuthContext from '../auth/context';
import { useContext } from 'react';

const validationSchemea = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-circle.png')}
      />
      <ErrorMessage
        error='Invalid email and/or password.'
        visible={loginFailed}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchemea}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />

        {/*  If It's Touched */}
        {/* {touched.password && <ErrorMessage error={errors.password} />} */}
        <SubmitButton title='Login' />
      </AppForm>
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
