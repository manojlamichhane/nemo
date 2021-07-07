import React from 'react';
import {Image, Text, View} from 'react-native';
import {windowHeight, windowWidth} from './index';

const Logo = () => {
  return (
    <Image
      style={{
        resizeMode: 'contain',
        width: 0.333 * windowWidth,
        height: 0.033 * windowHeight,
      }}
      source={require('../assets/images/logo.png')}
    />
  );
};

export default Logo;
