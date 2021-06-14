import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushTokens';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const { data } = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(data);
      console.log(data);
    } catch (error) {
      console.log('Error getting a push notification', error);
    }
  };
};
