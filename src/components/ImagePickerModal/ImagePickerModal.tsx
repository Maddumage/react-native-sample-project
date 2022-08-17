import * as React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

interface ImagePickerModalProps {
	isVisible: boolean;
	onClose: () => void;
	onImageLibraryPress: () => void;
	onCameraPress: () => void;
}

const ImagePickerModal = (props: ImagePickerModalProps) => {
	const { isVisible, onClose, onImageLibraryPress, onCameraPress } =
		props;
	return (
		<Modal
			isVisible={isVisible}
			onBackButtonPress={onClose}
			onBackdropPress={onClose}
			style={styles.modal}>
			<SafeAreaView style={styles.container}>
				<Text>Choose Profile Picture</Text>
				<View style={styles.buttons}>
					<Pressable
						style={styles.button}
						onPress={onImageLibraryPress}>
						<MaterialCommunityIcons
							name='file-image'
							color={'#000000'}
							size={30}
						/>
						<Text style={styles.buttonText}>
							Library
						</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={onCameraPress}>
						<MaterialCommunityIcons
							name='camera'
							color={'#000000'}
							size={30}
						/>
						<Text style={styles.buttonText}>
							Camera
						</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

export default ImagePickerModal;

const styles = StyleSheet.create({
	modal: {
		justifyContent: 'flex-end',
		margin: 0,
	},
	buttonIcon: {
		width: 30,
		height: 30,
		margin: 10,
	},
	container: {
		backgroundColor: 'white',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		height: 150,
		// justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 16,
	},
	buttons: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: '600',
	},
});
