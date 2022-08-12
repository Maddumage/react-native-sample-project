import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import { FlatButton } from '../../components';

const ForgotPasswordScreen = (props: any) => {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Formik initialValues={{}} onSubmit={() => {}}>
				<>
					<View
						style={{
							flex: 1,
							justifyContent:
								'center',
							alignItems: 'center',
						}}>
						<Text style={styles.title}>
							Forgot Password
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent:
								'center',
							alignItems: 'center',
						}}>
						<FlatButton
							onPress={() => {
								navigation.goBack();
							}}
							title='Go Back'
						/>
						<FlatButton
							onPress={() => {
								navigation.navigate(
									'Help'
								);
							}}
							title='Help'
						/>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent:
								'center',
							alignItems: 'center',
						}}>
						<FlatButton
							onPress={() => {
								navigation.navigate(
									'About'
								);
							}}
							title='About'
						/>
					</View>
				</>
			</Formik>
		</View>
	);
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: '#000000',
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
