import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native';
import Typo from '../constants/Typo';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const EducationHome = () => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={{marginTop: 42, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon
          onPress={() => authcontext.toggleEducation()}
          style={{position: 'absolute', left: 0}}
          name="arrow-back"
          size={40}
          color="black"
        />
        <Typo weight="bold" size="30">
          Education
        </Typo>
      </View>
      <TextInput
        style={{marginVertical: 20}}
        label="Search"
        mode="outlined"
        value={null}
        onChangeText={null}
        right={
          <TextInput.Icon
            name={() => <Icon name="search-outline" size={24} />}
          />
        }
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{
            ...styles.categorybar,
            backgroundColor: '#96A7EB1A',
          }}>
          <Typo size="14">All Content</Typo>
        </TouchableOpacity>
        <View
          style={{
            ...styles.categorybar,
            backgroundColor: 'white',
          }}>
          <Typo size="14">Diabetes</Typo>
        </View>
        <View
          style={{
            ...styles.categorybar,
            backgroundColor: 'white',
          }}>
          <Typo size="14">Blood Pressure</Typo>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categorybar: {
    width: 140,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
export default EducationHome;
