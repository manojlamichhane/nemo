import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PatientLogin from '../Screens/PatientLogin';
const AuthStack = () => {
  const AuthStackNavigator = createStackNavigator();
  return (
    <AuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNavigator.Screen name="Home" component={HomeScreen} />
      <AuthStackNavigator.Screen name="Login" component={PatientLogin} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
