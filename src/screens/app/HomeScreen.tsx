import React from 'react';
import { Text, View } from 'react-native';
import { FlatButton } from '../../components';

const HomeScreen = (props: any) => {
	const { navigation } = props;
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>Home Screen</Text>
			<FlatButton
				onPress={() => {
					navigation.navigate('Profile');
				}}
				title='Go to Profile'
			/>
			<FlatButton
				onPress={() => {
					navigation.navigate('Common', {
						screen: 'Help',
					});
				}}
				title='Help'
			/>
			<FlatButton
				onPress={() => {
					navigation.navigate('Common');
				}}
				title='About'
			/>
		</View>
	);
};

export default HomeScreen;
