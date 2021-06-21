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
          style={{width: 109, height: 20}}
          source={require('../assets/images/logo.png')}
        />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
        <Typo size="29">Select your healthcare organization</Typo>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{width: 200, height: 200, marginTop: 30}}
            source={require('../assets/images/image_73.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{width: 330, height: 86, marginTop: 30}}
            source={require('../assets/images/image_74.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image
            style={{width: 330, height: 86, marginTop: 30}}
            source={require('../assets/images/image_75.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
