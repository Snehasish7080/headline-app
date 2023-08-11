import {BackdropBlur, Canvas, Fill, Rect} from '@shopify/react-native-skia';
import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import AppButton from '../../atoms/AppButton/AppButton';

import {styles} from './OtpScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';

const OtpScreen: React.FC<UnAuthenticatedNavProps<'OtpScreen'>> = ({
  navigation,
}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <Canvas style={{height: height}}>
          <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            color="rgba(221, 231, 243,0.5392)"
          />
          <BackdropBlur
            blur={4}
            clip={{x: 0, y: 0, width: width, height: height}}>
            <Fill color="rgba(0, 0, 0, 0.1)" />
          </BackdropBlur>
        </Canvas>
        <View style={styles.container}>
          <AppText lineHeight={18} style={styles.title}>
            Verify OTP
          </AppText>
          <View style={styles.inputContainer}>
            {Array(4)
              .fill(undefined)
              .map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginLeft: index ? 10 : 0,
                    }}>
                    <AppInputBox
                      width={60}
                      height={60}
                      keyboardType="phone-pad"
                      textAlign="center"
                      maxLength={1}
                    />
                  </View>
                );
              })}
          </View>
          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={15}
            fontSize={18}
            btnStyle={styles.btn}
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}>
            Submit
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreen;
