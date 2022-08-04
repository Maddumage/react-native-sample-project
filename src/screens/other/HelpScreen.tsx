import React from 'react';
import { Button, Text, View } from 'react-native';

const HelpScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default HelpScreen;
