import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeScreen, ProfileScreen } from '../screens';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			activeColor='#f0edf6'
			inactiveColor='#3e2465'
			barStyle={{
				backgroundColor: '#694fad',
				paddingBottom:
					Platform.OS === 'android' ? 48 : 0, // only for android transluent navigation bar
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='home'
							color={color}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='account'
							color={color}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;
