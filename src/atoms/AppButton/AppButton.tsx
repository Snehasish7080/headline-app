import {
  Canvas,
  Group,
  RoundedRect,
  Shadow,
  Text,
  useFont,
  CanvasProps,
  Paint,
} from '@shopify/react-native-skia';
import React from 'react';
import {Pressable, PressableProps, View, ViewStyle} from 'react-native';
import {Colors} from '../../utils/theme';

type AppButtonProps = PressableProps & {
  width: number;
  height: number;
  x: number;
  y: number;
  fontSize?: number;
  children?: string;
  btnStyle?: ViewStyle;
};
const AppButton: React.FC<AppButtonProps> = ({
  height,
  width,
  x,
  y,
  fontSize = 18,
  children,
  btnStyle,
  ...props
}) => {
  const font = useFont(
    require(`../../assets/fonts/Lato-Regular.ttf`),
    fontSize,
  );

  const size = font?.getTextWidth(children || '');

  return (
    <View
      style={[
        btnStyle,
        {
          position: 'relative',
        },
      ]}>
      <Pressable
        style={{
          width: width,
          height: height,
          position: 'absolute',
          zIndex: 1,
          top: y,
          right: x,
        }}
        {...props}
      />
      <Canvas style={{height: '100%', width: '100%'}}>
        <Group color={Colors.btnBackground}>
          <RoundedRect x={x} y={y} width={width} height={height} r={16}>
            <Paint
              color={'rgba(136, 165, 191, 0.04)'}
              style="stroke"
              strokeWidth={1}
            />
            <Shadow dx={4} dy={2} blur={16} color="rgba(136, 165, 191, 0.48)" />
            <Shadow dx={-4} dy={-2} blur={16} color="rgba(255, 255, 255, 1)" />
          </RoundedRect>
          <Text
            x={(width - (size || 0)) / 2 + x}
            y={height / 1.6 + y}
            text={children || ''}
            font={font}
            color={Colors.textPrimary}
          />
        </Group>
      </Canvas>
    </View>
  );
};

export default AppButton;
