import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAuth } from '../../contexts';
import { userActions } from '../../slices';
import { RootState, useAppDispatch } from '../../store';

const ProfileScreen = (props: any) => {
	const { navigation } = props;
	const { signOut } = useAuth();
	const dispatch = useAppDispatch();
	const { user, isLoading } = useSelector(
		(state: RootState) => state.user
	);

	useEffect(() => {
		dispatch(userActions.getUserProfile());
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>Profile Screen</Text>
			{user && (
				<>
					<Text>
						{user.first_name +
							' ' +
							user.last_name}
					</Text>
					<Text>{user.email}</Text>
				</>
			)}
			<Button
				title='Go to Home'
				onPress={() => {
					navigation.navigate('Home');
				}}
			/>
			<Button
				title='Go Back'
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<Button
				title='Help'
				onPress={() => {
					navigation.navigate('Common', {
						screen: 'Help',
					});
				}}
			/>
			<Button
				title='About'
				onPress={() => {
					navigation.navigate('Common');
				}}
			/>

			<Button title='Logout' onPress={() => signOut()} />
		</View>
	);
};

export default ProfileScreen;
