import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Typo from '../constants/Typo';
import Separator from '../constants/Separator';

const HomeScreen = props => {
  return (
    <View style={{alignItems: 'center', marginTop: 42}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 140, height: 26}}
          source={require('../assets/images/logo.png')}
        />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Typo size="29">Select your healthcare organization</Typo>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{width: 200, height: 200, marginTop: 35}}
            source={require('../assets/images/image_73.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 353,
              height: 89,
              marginTop: 13,
            }}
            source={require('../assets/images/image_74.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 353,
              height: 89,
              marginTop: 13,
            }}
            source={require('../assets/images/image_75.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
