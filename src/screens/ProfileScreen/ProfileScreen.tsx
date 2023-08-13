import React from 'react';
import {FlatList, View} from 'react-native';
import AppBackground from '../../atoms/AppBackground/AppBackground';
import AppText from '../../atoms/AppText/AppText';
import ThreadComponent from '../../molecules/ThreadComponent/ThreadComponent';
import {AuthenticatedNavProps} from '../../navigation/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './ProfileScreenStyles';
import ProfileSection from './ProfileSection';

const data = [
  {
    showImage: true,
    item: '1',
    content:
      'https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    showText: true,
    item: '2',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];
const ProfileScreen: React.FC<AuthenticatedNavProps<'ProfileScreen'>> = () => {
  return (
    <AppBackground style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <ProfileSection />
              <View style={styles.threadTitleContainer}>
                <AppText lineHeight={16} style={styles.threadCount}>
                  110
                </AppText>
                <AppText lineHeight={16} style={styles.threadTitle}>
                  Threads
                </AppText>
              </View>
            </>
          );
        }}
        data={data}
        keyExtractor={item => item.item.toString()}
        contentContainerStyle={{
          paddingBottom: 30,
          flexGrow: 1,
          paddingHorizontal: 16,
        }}
        renderItem={({item}) => {
          return (
            <ThreadComponent
              showImage={item?.showImage}
              showText={item.showText}
              content={item.content}
            />
          );
        }}
      />
    </AppBackground>
  );
};

export default ProfileScreen;
