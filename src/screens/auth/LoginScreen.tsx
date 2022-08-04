import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import { useAuth } from '../../contexts';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { loading, signIn } = useAuth();

  const onSubmit = (values: any) => {
    signIn(values);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'stretch',
            padding: 20,
          }}>
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder={'Email address'}
            style={styles.input}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder={'Password'}
            style={styles.input}
            textContentType="password"
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Submit" />
          <Button
            title="Forgot Password"
            onPress={() => {
              navigation.navigate('Fogot Password');
            }}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginScreen;
