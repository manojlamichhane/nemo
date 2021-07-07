import React, {useContext} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import Separator from '../constants/Separator';
import Typo from '../constants/Typo';
import {windowWidth} from '../constants';
import AuthContext from '../store/contexts/AuthContext';
import Logo from '../constants/Logo';
import MenuIcon from '../constants/MenuIcon';
import DashBoardCard from '../constants/DashBoardCard';

const PatientDashboard = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={() => props.navigation.openDrawer()}>
          <MenuIcon />
        </TouchableOpacity>
        <Logo />
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
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: 18, height: 18, resizeMode: 'contain'}}
            source={require('../assets/images/call.png')}
          />
          <Typo color="#8a9fc3" size="18">
            911
          </Typo>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity onPress={() => authcontext.toggleSymptom()}>
            <DashBoardCard
              image={require('../assets/images/signals.png')}
              title="Symptom Check"
              subtitle="Referrals, wait times & NPS"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => authcontext.toggleEducation()}>
            <DashBoardCard
              image={require('../assets/images/education.png')}
              title="Education"
              subtitle="Admissions, SNF & Refferals"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0.055 * windowWidth,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDoctor: {
    height: 40,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#8a9fc3',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
export default PatientDashboard;
