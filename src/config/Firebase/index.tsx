// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-1hKuaqepZwuUjIOa2xlorIlf78u5lDo",
  authDomain: "mobileapp-c2306.firebaseapp.com",
  projectId: "mobileapp-c2306",
  storageBucket: "mobileapp-c2306.firebasestorage.app",
  messagingSenderId: "172659621717",
  appId: "1:172659621717:web:27afe7f4ecc0ea2e83f9dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});