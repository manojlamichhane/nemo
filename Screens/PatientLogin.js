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
import Logo from '../constants/Logo';

const PatientLogin = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Logo />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 20,
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '12%',
          }}
          source={require('../assets/images/Hi.png')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 50}}>
            <TextInput
              disabled
              style={styles.textField}
              mode="outlined"
              label="Username"
              value={null}
              onChangeText={null}
            />
            <TextInput
              disabled
              style={styles.textField}
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
                <Typo size="16">Forgot Username?</Typo>
              </TouchableOpacity>
              <TouchableOpacity>
                <Typo size="16">Forgot Password?</Typo>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignItems: 'center', marginVertical: 20}}>
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
  textField: {
    marginTop: 15,
    height: 0.065 * windowHeight,
  },
  button: {
    marginBottom: 15,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 0.065 * windowHeight,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PatientLogin;
