import { StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <Image
        style={styles.stretch}
        source={require('../../assets/images/logo.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    margin: 20,
  },
});
