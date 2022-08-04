import React from 'react';
import { Button, Text, View } from 'react-native';

const ForgotPasswordScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Forgot Password Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Help"
        onPress={() => {
          navigation.navigate('Help');
        }}
      />
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
