import * as firebase from 'firebase';

export const sendPushNotification = async () => {
  try {
    const fcmTokenResponse = await firebase
      .database()
      .ref(`/linked_user_1/fcmToken`)
      .once('value');
    const fcmToken = fcmTokenResponse.val();
    // Send push notification to linked user here
    const message = {
      to: fcmToken,
      notification: {
        title: `User 1 needs attention ASAP!`,
        body: `User 1 (username) needs attention asap!`,
      },
    };
    const sendResponse = await firebase.messaging().send(message);
    console.log(sendResponse);
  } catch (error) {
    console.error(error);
  }
};