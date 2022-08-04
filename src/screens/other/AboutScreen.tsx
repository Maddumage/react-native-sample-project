import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../contexts';

const AboutScreen = (props: any) => {
  const { navigation } = props;
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};

export default AboutScreen;
