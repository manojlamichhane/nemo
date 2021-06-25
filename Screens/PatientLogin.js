import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Separator from '../constants/Separator';
import Typo from '../constants/Typo';
import {windowWidth, windowHeight} from '../constants';
import {TextInput, Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const PatientLogin = props => {
  console.log(windowWidth, windowHeight);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            paddingHorizontal: 0.05 * windowWidth,
            marginTop: 20,
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: '100%',
              height: '11%',
            }}
            source={require('../assets/images/Hi.png')}
          />
          <TextInput
            disabled
            style={{
              marginTop: 35,
              height: 0.065 * windowHeight,
            }}
            mode="outlined"
            label="Username"
            value={null}
            onChangeText={null}
          />
          <TextInput
            disabled
            style={{
              marginTop: 0.0197 * windowHeight,
              height: 0.065 * windowHeight,
            }}
            mode="outlined"
            secureTextEntry
            right={
              <TextInput.Icon
                style={{marginTop: 0.0197 * windowHeight}}
                name="eye"
              />
            }
            label="Password"
            value={null}
            onChangeText={null}
          />
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
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
            disabled
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
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => props.navigation.navigate('Home')}>
            Back
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 0.073 * windowHeight,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PatientLogin;
