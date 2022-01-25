import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDKzVTFVJ_RlZ3yxw3l5Hjz3KbJcQ3xSs8",
  authDomain: "react-sec01-001.firebaseapp.com",
  projectId: "react-sec01-001",
  storageBucket: "react-sec01-001.appspot.com",
  messagingSenderId: "339079139577",
  appId: "1:339079139577:web:da1b6cbbb3e9aa2c5e9228"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BDg4LKlj5aMvar4jZsOAiEUAWhZHR83mYCVRNnJq7l81rWRxnVltFR9-g8N659OsuWjluDpiXYPAsc7cm6jt4cA"
);

export { messaging };
