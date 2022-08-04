import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  AboutScreen,
  ForgotPasswordScreen,
  HelpScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SplashScreen,
} from '../screens';
import { useAuth } from '../contexts';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    //You can see the component implementation at the repository
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authData && authData.token ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Fogot Password"
              component={ForgotPasswordScreen}
            />
          </>
        )}
        <Stack.Group
          navigationKey={authData && authData.token ? 'user' : 'guest'}>
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
