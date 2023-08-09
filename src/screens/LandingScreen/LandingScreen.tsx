import {Canvas, Text, useFont} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, KeyboardAvoidingView, View} from 'react-native';
import AppBackground from '../../atoms/AppBackground/AppBackground';
import AppButton from '../../atoms/AppButton/AppButton';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';
import {styles} from './LandingScreenStyles';

const LandingScreen: React.FC<UnAuthenticatedNavProps<'LandingScreen'>> = ({
  navigation,
}) => {
  const fontSize = 32;
  const font = useFont(
    require('../../assets/fonts/Lato-Regular.ttf'),
    fontSize,
  );
  return (
    <AppBackground style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <AppText lineHeight={28} style={styles.title}>
          Welcome back {`\n`}to Headline
        </AppText>
        <View style={styles.inputContainer}>
          <AppInputBox
            width={horizontalScale(327)}
            height={58}
            label="Mobile"
            keyboardType="phone-pad"
            textAlign="center"
          />
        </View>
        <Canvas style={styles.canvas}>
          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={10}
            fontSize={20}>
            Sign in
          </AppButton>
        </Canvas>
      </KeyboardAvoidingView>
    </AppBackground>
  );
};

export default LandingScreen;
