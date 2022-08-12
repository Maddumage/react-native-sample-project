import * as React from 'react';
import {
	Text,
	StyleSheet,
	Pressable,
	ColorValue,
	PressableAndroidRippleConfig,
	ActivityIndicator,
} from 'react-native';

interface FlatButtonProps {
	title?: string;
	color?: ColorValue | undefined;
	children?: React.ReactElement | React.ReactElement[];
	onPress: () => void;
	loading?: boolean;
}

const androidRipple: PressableAndroidRippleConfig = {
	color: '#694fad',
	borderless: true,
	radius: 2,
	foreground: true,
};

/**
 * @description - Pressable Button component with opacity animation
 * @param {FlatButtonProps} props - properties
 */
const FlatButton = ({
	title,
	color = '#694fad',
	children,
	loading,
	onPress,
}: FlatButtonProps) => {
	return (
		<Pressable
			style={({ pressed }) => [
				{
					opacity: loading
						? 0.9
						: pressed
						? 0.7
						: 1,
					backgroundColor: color,
				},
				styles.container,
			]}
			onPress={onPress}
			android_ripple={androidRipple}>
			{loading && (
				<ActivityIndicator
					style={{
						zIndex: 1,
						position: 'absolute',
					}}
				/>
			)}
			{children ? (
				children
			) : (
				<Text style={styles.text}>{title}</Text>
			)}
		</Pressable>
	);
};

export default FlatButton;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		minHeight: 36,
		minWidth: 64,
		borderTopEndRadius: 4,
		borderTopStartRadius: 4,
		borderBottomEndRadius: 4,
		borderBottomStartRadius: 4,
		marginVertical: 8,
	},
	text: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});
