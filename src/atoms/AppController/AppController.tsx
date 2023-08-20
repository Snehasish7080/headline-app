import {View, Text} from 'react-native';
import React from 'react';
import {Controller, ControllerProps, FieldValues} from 'react-hook-form';
import AppText from '../AppText/AppText';
import {Colors, FontFamily} from '../../utils/theme';

type AppControllerProps<T extends FieldValues> = ControllerProps<T, any> & {
  error?: string;
};
const AppController = <T extends FieldValues>({
  error,
  ...props
}: AppControllerProps<T>) => {
  return (
    <>
      <Controller {...props} />
      {Boolean(error) && (
        <AppText
          lineHeight={12}
          style={{
            color: Colors.error,
            fontFamily: FontFamily.LatoRegular,
            fontSize: 12,
            marginTop: 10,
            paddingHorizontal: 5,
          }}>
          {error}
        </AppText>
      )}
    </>
  );
};

export default AppController;
