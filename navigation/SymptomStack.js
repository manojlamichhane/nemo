import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SymptomHome from '../Screens/SymptomHome';
import SymptomConsult from '../Screens/SymptomConsult';

const SymptomStack = () => {
  const SymptomStackNavigator = createStackNavigator();
  return (
    <SymptomStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <SymptomStackNavigator.Screen name="Home" component={SymptomHome} />
      <SymptomStackNavigator.Screen name="Consult" component={SymptomConsult} />
    </SymptomStackNavigator.Navigator>
  );
};

export default SymptomStack;
