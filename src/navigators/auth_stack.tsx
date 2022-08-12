import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, ForgotPasswordScreen } from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name='Login'
				options={{
					headerShown: false,
				}}
				component={LoginScreen}
			/>
			<AuthStack.Screen
				name='ForgotPassword'
				options={{
					headerShown: false,
				}}
				component={ForgotPasswordScreen}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthStackNavigator;
