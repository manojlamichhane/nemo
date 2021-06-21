import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EducationHome from '../Screens/EducationHome';
import EducationDetail from '../Screens/EducationDetail';

const EducationStack = () => {
  const EducationStackNavigator = createStackNavigator();
  return (
    <EducationStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <EducationStackNavigator.Screen
        name="EducationHome"
        component={EducationHome}
      />
      <EducationStackNavigator.Screen
        name="EducationDetail"
        component={EducationDetail}
      />
    </EducationStackNavigator.Navigator>
  );
};

export default EducationStack;
