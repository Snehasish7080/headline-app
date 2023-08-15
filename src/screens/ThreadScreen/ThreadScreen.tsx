import {View, Text} from 'react-native';
import React from 'react';
import {AuthenticatedNavProps} from '../../navigation/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './ThreadScreenStyles';
import Threads from '../../molecules/Threads/Threads';

const ThreadScreen: React.FC<AuthenticatedNavProps<'ThreadScreen'>> = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Threads />
        <Threads />
      </View>
    </View>
  );
};

export default ThreadScreen;
