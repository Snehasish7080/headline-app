import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {AuthenticatedNavProps} from '../../navigation/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import AppBackground from '../../atoms/AppBackground/AppBackground';
import {
  Canvas,
  Group,
  Paint,
  RoundedRect,
  Shadow,
} from '@shopify/react-native-skia';
import {Colors} from '../../utils/theme';
import {styles} from './ProfileScreenStyles';

const ProfileScreen: React.FC<AuthenticatedNavProps<'ProfileScreen'>> = () => {
  const {width} = useWindowDimensions();
  return (
    <AppBackground style={{flex: 1}}>
      <View style={styles.canvasContainer}>
        <Canvas style={styles.canvas}>
          <Group color={Colors.btnBackground}>
            <RoundedRect
              x={width / 2 - width / 1.3 / 2}
              y={50}
              width={width / 1.3}
              height={280}
              r={30}>
              <Paint
                color={'rgba(136, 165, 191, 0.04)'}
                style="stroke"
                strokeWidth={1}
              />
              <Shadow
                dx={2}
                dy={1}
                blur={3}
                color="rgba(136, 165, 191, 0.48)"
              />
              <Shadow dx={-3} dy={-2} blur={4} color="rgba(255, 255, 255, 1)" />
            </RoundedRect>
          </Group>
        </Canvas>
        <View style={styles.profileContainer}></View>
      </View>
    </AppBackground>
  );
};

export default ProfileScreen;
