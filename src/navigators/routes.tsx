import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '../screens';
import { useAuth } from '../contexts';
import RootStackNavigator from './root_stack';

const Routes = () => {
	const { authData, loading } = useAuth();

	if (loading) {
		//You can see the component implementation at the repository
		return <SplashScreen />;
	}

	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
};

export default Routes;
