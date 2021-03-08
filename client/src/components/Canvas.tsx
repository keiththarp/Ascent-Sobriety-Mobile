import { useLinkProps } from '@react-navigation/native';
import React from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';

const Canvas: React.FC = (props) => {
  return (
    <ImageBackground source={require('../../assets/temp-ascent-bg.jpg')} style={styles.canvasImage}>
      {props.children}
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  canvasImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // resizeMode: 'contain'
  }
});

export default Canvas;