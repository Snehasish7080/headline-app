import {View, Text} from 'react-native';
import React from 'react';
import {Controller, ControllerProps, FieldValues} from 'react-hook-form';
import AppText from '../AppText/AppText';
import {Colors, FontFamily} from '../../utils/theme';

const AppController: React.FC<ControllerProps<FieldValues, any>> = ({
  ...props
}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <Controller {...props} />
      <AppText
        lineHeight={12}
        style={{
          color: Colors.error,
          fontFamily: FontFamily.LatoRegular,
          fontSize: 12,
          marginTop: 5,
          borderWidth: 1,
        }}>
        This is required.
      </AppText>
    </View>
  );
};

export default AppController;
