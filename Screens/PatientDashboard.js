import React, {useContext} from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import Separator from '../constants/Separator';
import Typo from '../constants/Typo';
import {windowHeight, windowWidth} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthContext from '../store/contexts/AuthContext';

const PatientDashboard = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 42,
        paddingHorizontal: 0.05 * windowWidth,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 40,
              height: 40,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/menu_icon.png')}
          />
        </TouchableOpacity>
        <Image
          style={{
            resizeMode: 'contain',
            width: 0.333 * windowWidth,
            height: 0.033 * windowHeight,
            marginLeft: 15,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            ...styles.contactDoctor,
            width: 0.575 * windowWidth,
            backgroundColor: '#8a9fc3',
          }}>
          <Typo color="white" size="18">
            Contact Doctor
          </Typo>
        </View>
        <View
          style={{
            ...styles.contactDoctor,
            width: 0.22 * windowWidth,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Image
            style={{width: 14, height: 20}}
            source={require('../assets/images/call.png')}
          />
          <Typo color="#8a9fc3" size="20">
            911
          </Typo>
        </View>
      </View>

      <View style={styles.adminCard}>
        <TouchableOpacity onPress={() => authcontext.toggleSymptom()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{width: 22, height: 16}}
                source={require('../assets/images/signals.png')}
              />
              <Typo weight="normal" size="22">
                Symptom Check
              </Typo>
              <Typo weight="normal" size="14">
                Refferals, wait times & NPS
              </Typo>
            </View>
            <Icon name="navigate-next" size={40} color="#c9c9d4" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.adminCard}>
        <TouchableOpacity onPress={() => authcontext.toggleEducation()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/images/education.png')}
              />
              <Typo weight="normal" size="22">
                Education
              </Typo>
              <Typo weight="normal" size="14">
                Admissions, SNF & Refferals
              </Typo>
            </View>
            <Icon name="navigate-next" size={40} color="#c9c9d4" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adminCard: {
    paddingHorizontal: 0.05 * windowWidth,
    paddingVertical: 0.05 * windowWidth,
    marginTop: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 108,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 2,
  },
  contactDoctor: {
    height: 40,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#8a9fc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PatientDashboard;
