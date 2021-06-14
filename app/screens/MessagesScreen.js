import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  ListItem,
  ListItemDeleteAction,
  ListSeparator,
} from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Hey, This is Newaz',
    description: 'Nice to meet you!',
    image: require('../assets/saif.png'),
  },
  {
    id: 2,
    title: 'Mosh Here',
    description: 'React Native...yeet!',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => alert('Shetai')}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
