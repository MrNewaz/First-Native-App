import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Text,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Click me'
        onPress={() =>
          Alert.prompt('My Title', 'My Message', (text) =>
            console.log('hmm', text)
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
