import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Symptoms from '../Screens/Symptoms';
import SymptomsNext from '../Screens/SymptomsNext';
import SymptomsReport from '../Screens/SymptomsReport';

const SymptomStack = () => {
  const SymptomStackNavigator = createStackNavigator();
  return (
    <SymptomStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <SymptomStackNavigator.Screen name="Home" component={Symptoms} />
      <SymptomStackNavigator.Screen name="Consult" component={SymptomsNext} />
      <SymptomStackNavigator.Screen name="Report" component={SymptomsReport} />
    </SymptomStackNavigator.Navigator>
  );
};

export default SymptomStack;
