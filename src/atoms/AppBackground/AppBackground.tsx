import {View, Text, Dimensions, ViewProps} from 'react-native';
import React from 'react';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';

const AppBackground: React.FC<ViewProps> = ({...props}) => {
  return (
    <View {...props}>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <Rect
          x={0}
          y={0}
          width={Dimensions.get('screen').width}
          height={Dimensions.get('screen').height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(400, 500)}
            colors={[
              'rgba(235, 243, 250,0.0985)',
              'rgba(221, 231, 243,0.5392)',
              'rgba(229, 240, 249,1)',
            ]}
          />
        </Rect>
      </Canvas>
      {props.children}
    </View>
  );
};

export default AppBackground;
