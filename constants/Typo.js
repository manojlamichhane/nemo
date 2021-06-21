import React from 'react';
import {Text, View} from 'react-native';

const Typo = props => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: parseInt(props.size),
          fontWeight: props.weight,
          color: props.color,
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default Typo;
