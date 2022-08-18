import React from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text } from 'react-native';
import { Formik } from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import Config from 'react-native-config';

import { useAuth } from '../../contexts';
import { FlatButton } from '../../components';

const LoginScreen = ({ navigation }: { navigation: any }) => {
	const { loading, signIn } = useAuth();

	const onSubmit = (values: any) => {
		signIn(values);
	};

	return (
		<SafeAreaView>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={onSubmit}>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
				}) => (
					<View style={styles.container}>
						<Text style={styles.title}>
							Login
						</Text>
						<Spinner
							visible={loading}
							textContent={
								'Loading...'
							}
							textStyle={
								styles.spinnerTextStyle
							}
						/>

						<TextInput
							onChangeText={handleChange(
								'email'
							)}
							onBlur={handleBlur(
								'email'
							)}
							value={values.email}
							placeholder={
								'Email address'
							}
							style={styles.input}
							textContentType='emailAddress'
							keyboardType='email-address'
						/>
						<TextInput
							onChangeText={handleChange(
								'password'
							)}
							onBlur={handleBlur(
								'password'
							)}
							value={values.password}
							placeholder={'Password'}
							style={styles.input}
							textContentType='password'
							secureTextEntry
						/>
						<FlatButton
							onPress={handleSubmit}
							title='Submit'
							loading={loading}
						/>
						<FlatButton
							onPress={() => {
								navigation.navigate(
									'ForgotPassword'
								);
							}}
							title='Forgot Password'
						/>
						<Text>
							API URL :{' '}
							{Config.API_URL}
						</Text>
					</View>
				)}
			</Formik>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 0.5,
		padding: 10,
		borderRadius: 8,
	},
	spinnerTextStyle: {
		color: '#FFF',
	},
	title: {
		color: '#000000',
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	button: {
		marginVertical: 8,
	},
});

export default LoginScreen;
