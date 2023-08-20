import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {View} from 'react-native';
import AppButton from '../../atoms/AppButton/AppButton';
import AppController from '../../atoms/AppController/AppController';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {useLoginMutation} from '../../feature/services/auth';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {FontFamily} from '../../utils/theme';
import {styles} from './LoginScreenStyles';
import * as yup from 'yup';

type LoginData = {
  mobile: string;
};

const schema = yup
  .object({
    mobile: yup
      .string()
      .required('mobile no. is required')
      .length(10, 'invalid mobile'),
  })
  .required();

const LoginScreen: React.FC<UnAuthenticatedNavProps<'LoginScreen'>> = ({
  navigation,
}) => {
  const [login] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>({
    defaultValues: {
      mobile: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginData) => {
    try {
      login({
        mobile: data?.mobile,
      })
        .unwrap()
        .then(res => {
          if (res.success) {
            navigation.pop();
            navigation.navigate('OtpScreen', {
              token: res.token,
            });
          }
        });
    } catch (error) {}
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <AppText lineHeight={22} style={styles.loginTitle}>
          Sign In
        </AppText>
        <View style={styles.inputContainer}>
          <AppController
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <AppInputBox
                width={horizontalScale(327)}
                height={58}
                label="Mobile"
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={10}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
            name="mobile"
            error={errors?.mobile?.message}
          />
        </View>
        <AppButton
          width={horizontalScale(327)}
          height={60}
          x={24}
          y={15}
          fontSize={18}
          btnStyle={styles.btn}
          onPress={() => {
            handleSubmit(onSubmit)();
          }}>
          Continue
        </AppButton>
        <AppText lineHeight={12} style={styles.notRegisteredText}>
          Not Registered? Sign Up
        </AppText>
      </View>
    </View>
  );
};

export default LoginScreen;
