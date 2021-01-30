import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import MainNavigator from './src'

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <PaperProvider>
      <MainNavigator></MainNavigator>
    </PaperProvider>
  );
};

export default App;
