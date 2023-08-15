import {View, Text, Easing} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import AppHeader from '../../atoms/AppHeader/AppHeader';
import ThreadScreen from '../../screens/ThreadScreen/ThreadScreen';

const Stack = createStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          header: ({navigation, options}) => (
            <AppHeader
              onClickBack={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}>
              {options?.title}
            </AppHeader>
          ),
        }}
      />
      <Stack.Screen
        name="ThreadScreen"
        component={ThreadScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.in(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.out(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
          },
          cardStyleInterpolator: ({layouts, current, next}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
