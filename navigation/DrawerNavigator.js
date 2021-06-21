import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PatientDashboard from '../Screens/PatientDashboard';
import ProfileScreen from '../Screens/ProfileScreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <ProfileScreen {...props} />}
      initialRouteName="Admin">
      <Drawer.Screen name="Admin" component={PatientDashboard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
