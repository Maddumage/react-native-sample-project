import React, { useCallback, useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
	CameraOptions,
	ImageLibraryOptions,
	ImagePickerResponse,
} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import { Avatar } from '@rneui/themed';

import { FlatButton, ImagePickerModal } from '../../components';
import { useAuth } from '../../contexts';
import { userActions } from '../../slices';
import { RootState, useAppDispatch } from '../../store';

const ProfileScreen = (props: any) => {
	const { navigation } = props;
	const { signOut } = useAuth();
	const [pickerResponse, setPickerResponse] =
		useState<ImagePickerResponse>();
	const [visible, setVisible] = useState(false);

	const dispatch = useAppDispatch();
	const { user, isLoading } = useSelector(
		(state: RootState) => state.user
	);

	useEffect(() => {
		dispatch(userActions.getUserProfile());
	}, []);

	const onImageLibraryPress = useCallback(() => {
		const options: ImageLibraryOptions = {
			selectionLimit: 1,
			mediaType: 'photo',
			includeBase64: false,
		};
		ImagePicker.launchImageLibrary(options, setPickerResponse);
	}, []);

	const onCameraPress = React.useCallback(() => {
		const options: CameraOptions = {
			saveToPhotos: true,
			mediaType: 'photo',
			includeBase64: false,
		};
		ImagePicker.launchCamera(options, setPickerResponse);
	}, []);

	const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

	const handleImagePress = async () => {
		try {
			const options: CameraOptions = {
				mediaType: 'photo',
			};
			const result = await ImagePicker.launchCamera(options);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Avatar
				size={100}
				rounded
				source={{
					uri:
						uri ??
						'https://randomuser.me/api/portraits/men/36.jpg',
				}}
				onPress={() => setVisible(true)}
			/>

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
			<FlatButton
				title='Go to Home'
				onPress={() => {
					navigation.navigate('Home');
				}}
			/>
			<FlatButton
				title='Go Back'
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<FlatButton
				title='Help'
				onPress={() => {
					navigation.navigate('Common', {
						screen: 'Help',
					});
				}}
			/>
			<FlatButton
				title='About'
				onPress={() => {
					navigation.navigate('Common');
				}}
			/>
			<FlatButton
				title='Logout'
				onPress={() => {
					signOut();
				}}
			/>
			<ImagePickerModal
				isVisible={visible}
				onClose={() => setVisible(false)}
				onImageLibraryPress={onImageLibraryPress}
				onCameraPress={onCameraPress}
			/>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	avatarContainer: {
		width: 104,
		height: 104,
		borderRadius: 52,
		borderWidth: 2,
		borderColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
