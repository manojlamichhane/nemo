import React from 'react';
import {Image} from 'react-native';

const MenuIcon = () => {
  return (
    <Image
      style={{
        resizeMode: 'contain',
        width: 40,
        height: 40,
        marginRight: 15,
      }}
      source={require('../assets/images/menu_icon.png')}
    />
  );
};

export default MenuIcon;
