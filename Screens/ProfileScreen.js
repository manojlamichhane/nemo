import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import AuthContext from '../store/contexts/AuthContext';

const ProfileScreen = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={{marginTop: 20}}>
      <Button onPress={authcontext.changeStatus} title="LOGOUT" color="grey" />
    </View>
  );
};

export default ProfileScreen;
