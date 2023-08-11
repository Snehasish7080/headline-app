import {
  Canvas,
  Group,
  Paint,
  Path,
  rect,
  RoundedRect,
  rrect,
  Shadow,
  Skia,
} from '@shopify/react-native-skia';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';
import AppText from '../AppText/AppText';
import {styles} from './AppInputBoxStyles';

type AppInputBoxProps = TextInputProps & {
  width: number;
  height: number;
  label?: string;
  isActive?: boolean;
  activeColor?: string;
};
const AppInputBox: React.FC<AppInputBoxProps> = ({
  width,
  height = 58,
  label,
  isActive = false,
  activeColor = Colors.primary,
  ...props
}) => {
  const stroke = Skia.Path.Make();
  stroke.addRRect(rrect(rect(1, 1, width - 1.5, height - 1.5), 16, 16));
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
          {isActive && (
            <Group>
              <Path
                path={stroke}
                style="stroke"
                strokeWidth={1}
                strokeCap="round"
                color={activeColor}
              />
            </Group>
          )}
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
