import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AppButton from '../../atoms/AppButton/AppButton';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';

import {StackActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TextInput} from 'react-native-gesture-handler';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {ParentRouteList} from '../../navigation/ParentNavigation/ParentNavigationTypes';
import {Colors} from '../../utils/theme';
import {styles} from './OtpScreenStyles';

const OtpScreen: React.FC<UnAuthenticatedNavProps<'OtpScreen'>> = () => {
  const ref = useRef<TextInput>(null);
  const [otp, setOtp] = useState('');
  const [isActive, setActive] = useState<boolean>(true);

  const navigation = useNavigation<StackNavigationProp<ParentRouteList>>();

  const handleBlur = () => {
    if (ref && ref.current) {
      ref.current.blur();
      setActive(false);
    }
  };

  useEffect(() => {
    const keySubs = Keyboard.addListener('keyboardDidHide', () => {
      handleBlur();
    });
    return () => {
      keySubs.remove();
    };
  }, []);

  const otpInput = (item: number, index: number) => {
    const emptyComponent = '';
    const digit = Boolean(otp[index]) ? otp[index] : emptyComponent;

    const isCurrent = otp.length === index;
    const isLast = index === 3;
    const isFull = otp.length === 4;

    const isInputActive = isCurrent || (isLast && isFull);
    return (
      <TouchableOpacity
        key={index}
        style={{
          marginLeft: index ? 10 : 0,
        }}
        onPress={() => {
          if (ref && ref.current) {
            ref.current?.focus();
            setActive(true);
          }
        }}
        activeOpacity={1}>
        <AppInputBox
          width={60}
          height={60}
          keyboardType="number-pad"
          textAlign="center"
          maxLength={1}
          returnKeyType="done"
          textContentType="oneTimeCode"
          value={digit}
          cursorColor="transparent"
          activeColor={Colors.white}
          isActive={isActive && isInputActive}
          editable={false}
          strokeWidth={2}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <AppText lineHeight={18} style={styles.title}>
            Verify OTP
          </AppText>
          <View style={styles.inputContainer}>
            {Array(4).fill(0).map(otpInput)}
          </View>
          <TextInput
            ref={ref}
            maxLength={4}
            onChangeText={text => setOtp(text)}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            onBlur={handleBlur}
            autoFocus={true}
            style={{
              opacity: 0,
              height: 0,
            }}
          />
          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={15}
            fontSize={18}
            btnStyle={styles.btn}
            onPress={() => {
              navigation.dispatch(StackActions.replace('Authenticated'));
            }}>
            Submit
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreen;
