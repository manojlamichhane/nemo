import React, {useContext} from 'react';
import {ScrollView, Image, StyleSheet, View} from 'react-native';
import AuthContext from '../store/contexts/AuthContext';
import {Button} from 'react-native-paper';
import {windowWidth} from '../constants';

const ProfileScreen = props => {
  const authcontext = useContext(AuthContext);
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{width: '100%', height: 250}}
          source={{
            uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
          }}
        />
        <View style={{paddingHorizontal: 0.055 * windowWidth}}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={authcontext.changeStatus}>
            Logout
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 75,
    marginBottom: 20,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProfileScreen;
