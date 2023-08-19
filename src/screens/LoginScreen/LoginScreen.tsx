import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import AppButton from '../../atoms/AppButton/AppButton';
import AppController from '../../atoms/AppController/AppController';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {useLoginMutation} from '../../feature/services/login';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {FontFamily} from '../../utils/theme';
import {styles} from './LoginScreenStyles';

type LoginData = {
  mobile: string;
};

const LoginScreen: React.FC<UnAuthenticatedNavProps<'LoginScreen'>> = ({
  navigation,
}) => {
  const [login, result] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: {errors, touchedFields},
  } = useForm<LoginData>({
    defaultValues: {
      mobile: '',
    },
  });
  const onSubmit = (data: LoginData) => console.log(data);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <AppText lineHeight={22} style={styles.loginTitle}>
          Sign In
        </AppText>
        <View style={styles.inputContainer}>
          <Controller
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
          />
          {/* <AppController
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
          /> */}
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
