import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {styles} from './AppInputBoxStyles';
import {Canvas, Paint, RoundedRect, Shadow} from '@shopify/react-native-skia';
import {Colors, FontFamily} from '../../utils/theme';
import AppText from '../AppText/AppText';

type AppInputBoxProps = TextInputProps & {
  width: number;
  height: number;
  label?: string;
};
const AppInputBox: React.FC<AppInputBoxProps> = ({
  width,
  height = 58,
  label,
  ...props
}) => {
  return (
    <View style={styles.labelContainer}>
      {Boolean(label) && (
        <AppText lineHeight={16} style={styles.label}>
          {label}
        </AppText>
      )}
      <View
        style={[
          styles.container,
          {
            width: width,
            height: height,
          },
        ]}>
        <Canvas style={styles.canvas}>
          <RoundedRect
            x={0}
            y={0}
            width={width}
            height={height}
            r={16}
            color={Colors.btnBackground}>
            <Paint color={Colors.primary} style="stroke" strokeWidth={1} />
            <Shadow dx={-3} dy={-3} blur={7} color="#FFFFFF" inner />
            <Shadow
              dx={2}
              dy={2}
              blur={5}
              color="rgba(136, 165, 191, 0.38)"
              inner
            />
          </RoundedRect>
        </Canvas>
        <TextInput
          {...props}
          style={[
            {
              height: height,
              color: Colors.textPrimary,
              fontFamily: FontFamily.LatoRegular,
            },
            props.style,
          ]}
          selectionColor={Colors.textPrimary}
        />
      </View>
    </View>
  );
};

export default AppInputBox;
