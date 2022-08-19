import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import CarItem from './components/CarItem';
import { useEffect, useRef, useState } from 'react';

// Push notification
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


const registerForPushNotificationsAsync = async () => {
  let token;

  if (Device.isDevice){
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }

    if(finalStatus !== "granted") {
      alert("Failed to get push token for push notificatio")
      return
    }

    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log(token)
  }else {
    alert("Must use physical device for Push Notifications")
  }

  if (Platform.OS === "android"){
    Notifications.setNotificationCategoryAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C"
    })
  }

  return token

}


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'This is ofcourse a push notification',
      data: { data: 'This is ofcourse a push notification' },
    },
    trigger: { seconds: 2 },
  });
}



// App starts here

export default function App() {

  const [pushToken, setPushToken] = useState("")
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

  }, [])
  

  return (

      <View style={tw`h-[100%] w-[100%] bg-black`}>
        <CarItem pushNotification={schedulePushNotification} />
      </View>
  );
}

