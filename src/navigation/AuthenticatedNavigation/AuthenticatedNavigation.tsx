import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
