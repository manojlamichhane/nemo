import React from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import Typo from '../constants/Typo';
import Separator from '../constants/Separator';
import {windowHeight, windowWidth} from '../constants';

const HomeScreen = props => {
  console.log(windowWidth, windowHeight);
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 42}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: 0.333 * windowWidth,
            height: 0.033 * windowHeight,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          paddingHorizontal: 0.05 * windowWidth,
          alignItems: 'center',
        }}>
        <Typo size={0.08 * windowWidth}>
          Select your healthcare organization
        </Typo>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => props.navigation.navigate('Login')}>
            <Image
              style={{
                width: 0.51 * windowWidth,
                height: 0.26 * windowHeight,
                marginTop: 35,
              }}
              source={require('../assets/images/image_73.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Image
              style={{
                width: 0.89 * windowWidth,
                height: 0.12 * windowHeight,
                marginTop: 0.017 * windowHeight,
              }}
              source={require('../assets/images/image_74.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 0.92 * windowWidth,
                height: 0.12 * windowHeight,
                marginTop: 0.017 * windowHeight,
              }}
              source={require('../assets/images/image_75.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
