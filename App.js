import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { getDatabase, ref, set } from "firebase/database";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics" ; 

const firebaseConfig = {
  apiKey: "AIzaSyCpAvBPAdUOG9L0UKLuuvizT2BcnAFCdns",
  authDomain: "tiktok-dd43d.firebaseapp.com",
  databaseURL: "https://tiktok-dd43d-default-rtdb.firebaseio.com",
  projectId: "tiktok-dd43d",
  storageBucket: "tiktok-dd43d.appspot.com",
  messagingSenderId: "461813113995",
  appId: "1:461813113995:web:d884f7e3812dd66642208e",
  measurementId: "G-EYZZ09D978"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics ( app );



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
