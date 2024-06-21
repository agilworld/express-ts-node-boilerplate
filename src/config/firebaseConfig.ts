import firebase from "firebase-admin"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const serviceAccount = require("./ebuddy-test-18f44-firebase-adminsdk-j9xv6-ee28a7f839.json")
const firebaseConfig = {
  credential:firebase.credential.cert(serviceAccount)
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export default app