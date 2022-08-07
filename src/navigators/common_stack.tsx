import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelpScreen, AboutScreen } from '../screens';

const CommonStack = createNativeStackNavigator();

const CommonStackNavigator = () => {
	return (
		<CommonStack.Navigator>
			<CommonStack.Screen
				name='Help'
				component={HelpScreen}
			/>
			<CommonStack.Screen
				name='About'
				component={AboutScreen}
			/>
		</CommonStack.Navigator>
	);
};

export default CommonStackNavigator;
