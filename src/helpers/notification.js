// push notifications
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { saveToken } from "../redux/reducers/notification";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo push token:", token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const registerForPushNotifications = (
  singleUserId,
  dispatch,
  notificationListener,
  responseListener
) => {
  let notification = null;

  registerForPushNotificationsAsync().then((token) => {
    let dataToken = {
      userId: singleUserId,
      token: token,
    };
    dispatch(saveToken(dataToken))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  notificationListener.current = Notifications.addNotificationReceivedListener(
    (notificationResponse) => {
      notification = notificationResponse;
    }
  );

  responseListener.current =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });
  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
};

export default registerForPushNotifications;
