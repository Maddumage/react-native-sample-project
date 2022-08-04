import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile');
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

export default HomeScreen;
