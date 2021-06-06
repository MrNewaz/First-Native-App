import React, { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

const App = () => {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access library');
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error reading an Image', error);
    }
  };

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
};

export default App;
