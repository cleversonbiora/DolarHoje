import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  popInitialNotification: true,
    requestPermissions: true
  })
  export const PushService = (msg, title) => {
    PushNotification.localNotification({
      autoCancel: true,
      title: title,
      message: msg,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
    })
  }