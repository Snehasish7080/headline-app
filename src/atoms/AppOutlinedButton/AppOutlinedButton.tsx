import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {Colors} from '../../utils/theme';

type AppOutlinedButtonProps = TouchableOpacityProps & {
  textLineHeight: number;
  textStyle?: TextStyle;
};
const AppOutlinedButton: React.FC<AppOutlinedButtonProps> = ({
  textLineHeight,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        {
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 7,
          paddingHorizontal: 7,
          borderRadius: 8,
          borderColor: Colors.textPrimary,
        },
        props.style,
      ]}>
      {typeof props.children === 'string' && (
        <AppText lineHeight={textLineHeight} style={textStyle}>
          {props?.children}
        </AppText>
      )}
      {typeof props.children !== 'string' && props.children}
    </TouchableOpacity>
  );
};

export default AppOutlinedButton;
