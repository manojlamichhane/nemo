import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const SymptomHome = props => {
  const authcontext = useContext(AuthContext);
  const [options, setOptions] = useState(false);
  const handleWebViewNavigationStateChange = newNavState => {
    console.log(newNavState.url);
    if (newNavState.url.includes('#10')) {
      setOptions(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={ref => (webview = ref)}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        source={{uri: 'https://symptomate.com/diagnosis/'}}
      />
      {options ? (
        <View
          style={{
            paddingHorizontal: 10,
            marginBottom: 15,
          }}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => authcontext.toggleSymptom()}>
            Leave Symptom Checker
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => props.navigation.navigate('Consult')}>
            Consult a Doctor
          </Button>
        </View>
      ) : null}
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
export default SymptomHome;
