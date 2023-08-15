import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './ThreadsStyles';
import AppText from '../../atoms/AppText/AppText';

const Threads: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        }}
        style={styles.profilePic}
      />
      <View style={styles.contentContainer}>
        <AppText lineHeight={12} style={styles.userName}>
          Edward Clark
        </AppText>
        <AppText lineHeight={16} style={styles.thread}>
          We absolutely need to get smarter about privacy. Society is creeped
          out by big tech and big data.
        </AppText>
      </View>
    </View>
  );
};

export default Threads;
