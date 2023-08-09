import {
  Group,
  RoundedRect,
  Shadow,
  Text,
  useFont,
} from '@shopify/react-native-skia';
import React from 'react';
import {Colors} from '../../utils/theme';

type AppButtonProps = {
  width: number;
  height: number;
  x: number;
  y: number;
  fontSize?: number;
  children?: string;
};
const AppButton: React.FC<AppButtonProps> = ({
  height,
  width,
  x,
  y,
  fontSize = 18,
  children,
}) => {
  const font = useFont(
    require(`../../assets/fonts/Lato-Regular.ttf`),
    fontSize,
  );

  const size = font?.getTextWidth(children || '');

  return (
    <Group color={Colors.btnBackground}>
      <RoundedRect x={x} y={y} width={width} height={height} r={16}>
        <Shadow dx={4} dy={2} blur={10} color="rgba(136, 165, 191, 0.48)" />
        <Shadow dx={-4} dy={-2} blur={10} color="rgba(255, 255, 255, 1)" />
      </RoundedRect>
      <Text
        x={(width - (size || 0)) / 2 + x}
        y={height / 1.6 + y}
        text={children || ''}
        font={font}
        color={Colors.textPrimary}
      />
    </Group>
  );
};

export default AppButton;
