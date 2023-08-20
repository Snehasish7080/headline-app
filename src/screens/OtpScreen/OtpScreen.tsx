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
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AppController from '../../atoms/AppController/AppController';
import {useVerifyMutation} from '../../feature/services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

type VerifyData = {
  otp: string;
};

const schema = yup
  .object({
    otp: yup.string().required('OTP is required').length(4, 'invalid mobile'),
  })
  .required();

const OtpScreen: React.FC<UnAuthenticatedNavProps<'OtpScreen'>> = ({
  navigation,
  route,
}) => {
  const {token} = route.params;
  const ref = useRef<TextInput>(null);
  const [isActive, setActive] = useState<boolean>(true);
  const [verify] = useVerifyMutation();
  const stackNavigation = useNavigation<StackNavigationProp<ParentRouteList>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<VerifyData>({
    defaultValues: {
      otp: '',
    },
    resolver: yupResolver(schema),
  });
  const otp = watch('otp');

  const onSubmit = (data: VerifyData) => {
    if (token) {
      try {
        verify({
          otp: data?.otp,
          token: token,
        })
          .unwrap()
          .then(res => {
            if (res.success) {
              saveToken(res.token);
              navigation.pop();
              navigation.dispatch(StackActions.replace('Authenticated'));
            }
          });
      } catch (error) {}
    }
  };

  const saveToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (e) {
      console.log('error', e);
    }
  };

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
          <AppController
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              // <AppInputBox
              //   width={horizontalScale(327)}
              //   height={58}
              //   label="Mobile"
              //   keyboardType="phone-pad"
              //   textAlign="center"
              //   maxLength={10}
              //   onChangeText={onChange}
              //   value={value}
              //   onBlur={onBlur}
              // />
              <TextInput
                ref={ref}
                maxLength={4}
                onChangeText={onChange}
                keyboardType="number-pad"
                returnKeyType="done"
                textContentType="oneTimeCode"
                onBlur={() => {
                  handleBlur();
                  onBlur();
                }}
                autoFocus={true}
                style={{
                  opacity: 0,
                  height: 0,
                }}
              />
            )}
            name="otp"
            error={errors?.otp?.message}
          />

          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={15}
            fontSize={18}
            btnStyle={styles.btn}
            // onPress={() => {
            //   navigation.dispatch(StackActions.replace('Authenticated'));
            // }}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}>
            Submit
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreen;
