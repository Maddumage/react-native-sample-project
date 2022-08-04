import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Logo } from '../components';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Splash Screen');
    }, 5000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <Text>Splash Screen</Text>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default SplashScreen;
