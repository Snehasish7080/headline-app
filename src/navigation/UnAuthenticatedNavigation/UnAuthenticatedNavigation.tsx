import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedNavigationTypes';
import LandingScreen from '../../screens/LandingScreen/LandingScreen';

const Stack = createStackNavigator<UnAuthenticatedRouteList>();

const UnAuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigation;
