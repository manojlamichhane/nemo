import React, {useContext} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import Separator from '../constants/Separator';
import Typo from '../constants/Typo';
import {windowWidth, windowHeight} from '../constants';
import {TextInput, Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const PatientLogin = () => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={{flex: 1, marginTop: 42, alignItems: 'center'}}>
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
          width: windowWidth,
          height: windowHeight,
          paddingHorizontal: 25,
          marginTop: 64,
        }}>
        <Image
          style={{width: '100%', height: '11%', resizeMode: 'cover'}}
          source={require('../assets/images/Hi.png')}
        />
        <TextInput
          style={{marginTop: 20, height: 50}}
          mode="outlined"
          label="Username"
          value={null}
          onChangeText={null}
        />
        <TextInput
          style={{marginTop: 15, height: 50}}
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          label="Password"
          value={null}
          onChangeText={null}
        />
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Typo size="14">Forgot Username?</Typo>
          </TouchableOpacity>
          <TouchableOpacity>
            <Typo size="14">Forgot Password?</Typo>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{alignItems: 'center', marginVertical: 20}}>
          <Typo size="16">Don't yet have an account? Sign Up</Typo>
        </TouchableOpacity>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('pressed')}>
          Login
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => authcontext.changeStatus()}>
          Skip
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PatientLogin;
