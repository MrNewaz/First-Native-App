import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './app/components/AppButton';

export default function App() {
  return <WelcomeScreen />;
}
