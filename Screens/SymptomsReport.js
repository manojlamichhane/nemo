import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const SymptomsReport = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View>
      <Button
        style={{
          ...styles.button,
          backgroundColor: '#42deb4',
        }}
        mode="contained"
        onPress={() => authcontext.toggleSymptom()}>
        Close Symptom Checker
      </Button>
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
export default SymptomsReport;
