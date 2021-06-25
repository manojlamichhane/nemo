import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthProvider from './store/providers/AuthProvider';
import AuthContext from './store/contexts/AuthContext';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginSplash from './Screens/LoginSplash';
import AuthStack from './navigation/AuthStack';
import EducationStack from './navigation/EducationStack';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

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
    colors: {
      ...DefaultTheme.colors,
      primary: '#42deb4',
    },
    fonts: configureFonts(fontConfig),
  };
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <AuthContext.Consumer>
              {context => {
                if (context.isAuthenticating) {
                  return <LoginSplash />;
                }
                if (context.education) {
                  return <EducationStack />;
                }
                return context.isSkip ? <DrawerNavigator /> : <AuthStack />;
              }}
            </AuthContext.Consumer>
          </NavigationContainer>
        </View>
      </AuthProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
