import React, {useContext} from 'react';
import {
  TouchableOpacity,
  Pressable,
  Image,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Separator from '../constants/Separator';
import Typo from '../constants/Typo';
import {windowWidth} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthContext from '../store/contexts/AuthContext';

const PatientDashboard = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={{paddingHorizontal: 17, paddingVertical: 24}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={() => props.navigation.openDrawer()}>
          <Image
            style={{width: 56, height: 56}}
            source={require('../assets/images/menu_icon.png')}
          />
        </Pressable>
        <Image
          style={{width: 140, height: 26, marginLeft: 15}}
          source={require('../assets/images/logo.png')}
        />
        <Separator />
        <Typo size="20">Patient</Typo>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            ...styles.contactDoctor,
            width: 226,
            backgroundColor: '#8a9fc3',
          }}>
          <Typo color="white" size="18">
            Contact Doctor
          </Typo>
        </View>
        <View
          style={{
            ...styles.contactDoctor,
            width: 87,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.adminCard}>
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
              <Typo weight="bold" size="22">
                Symptom Check
              </Typo>
              <Typo weight="normal" size="14">
                Refferals, wait times & NPS
              </Typo>
            </View>
            <Icon name="navigate-next" size={40} color="#c9c9d4" />
          </View>
        </View>

        <View style={styles.adminCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => authcontext.toggleEducation()}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/images/education.png')}
              />
              <Typo weight="bold" size="22">
                Education
              </Typo>
              <Typo weight="normal" size="14">
                Admissions, SNF & Refferals
              </Typo>
            </TouchableOpacity>

            <Icon name="navigate-next" size={40} color="#c9c9d4" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  adminCard: {
    paddingHorizontal: 26,
    paddingVertical: 21,
    marginTop: 20,
    backgroundColor: 'white',
    width: windowWidth * 0.91,
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