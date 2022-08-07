import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts';
import BottomTabs from './bottom_tab_navigator';
import AuthStackNavigator from './auth_stack';
import CommonStackNavigator from './common_stack';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
	const { authData, loading } = useAuth();
	return (
		<RootStack.Navigator>
			{authData && authData.accessToken ? (
				<RootStack.Screen
					name='Sample Project'
					component={BottomTabs}
				/>
			) : (
				<RootStack.Screen
					name='Auth'
					component={AuthStackNavigator}
				/>
			)}
			<RootStack.Group
				navigationKey={
					authData && authData.accessToken
						? 'user'
						: 'guest'
				}>
				<RootStack.Screen
					name='Common'
					component={CommonStackNavigator}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootStackNavigator;
