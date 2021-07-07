import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Typo from '../constants/Typo';
import Separator from '../constants/Separator';
import {windowHeight, windowWidth} from '../constants';
import Logo from '../constants/Logo';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Logo />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: 0.11 * windowHeight,
          }}>
          <Typo size="28">Select your healthcare organization</Typo>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 30}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => props.navigation.navigate('Login')}>
              <Image
                style={{
                  width: 0.51 * windowWidth,
                  height: 0.26 * windowHeight,
                  resizeMode: 'contain',
                }}
                source={require('../assets/images/image_73.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Image
                style={styles.image}
                source={require('../assets/images/image_74.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Image
                style={styles.image}
                source={require('../assets/images/image_75.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 0.055 * windowWidth,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 0.89 * windowWidth,
    height: 0.12 * windowHeight,
    marginTop: 0.017 * windowHeight,
    resizeMode: 'contain',
  },
});
export default HomeScreen;
