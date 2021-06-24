import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthProvider from './store/providers/AuthProvider';
import AuthContext from './store/contexts/AuthContext';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginSplash from './Screens/LoginSplash';
import AuthStack from './navigation/AuthStack';
import PatientDashboard from './Screens/PatientDashboard';
import HomeScreen from './Screens/HomeScreen';
import EducationHome from './Screens/EducationHome';
import EducationDetail from './Screens/EducationDetail';
import EducationStack from './navigation/EducationStack';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import VideoPlayer from './constants/VideoPlayer';

const App = () => {
  const fontConfig = {
    android: {
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
    },
  };
  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
  };
  return (
    // <EducationDetail />
    // <PaperProvider theme={theme}>
    <AuthProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <EducationStack />
          {/* <AuthContext.Consumer>
              {context => {
                if (context.isAuthenticating) {
                  return <LoginSplash />;
                }
                if (context.education) {
                  return <EducationStack />;
                }
                return context.isSkip ? <DrawerNavigator /> : <AuthStack />;
              }}
            </AuthContext.Consumer> */}
        </NavigationContainer>
      </View>
    </AuthProvider>
    // </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
