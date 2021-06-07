import React from 'react';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tweets' component={Tweets} />
      <Stack.Screen
        name='TweetDetails'
        component={TweetDetails}
        options={({ route }) => ({
          title: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
