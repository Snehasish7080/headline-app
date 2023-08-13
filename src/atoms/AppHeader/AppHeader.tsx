import {View, Text, useWindowDimensions, Pressable} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import AppText from '../AppText/AppText';
import {styles} from './AppHeaderStyles';
import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  LinearGradient,
  Rect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigation/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {Colors} from '../../utils/theme';
import {backIcon} from '../../assets/icons/icons';

type AppHeaderProps = {
  children?: string;
  onClickBack: () => void;
};
const AppHeader: React.FC<AppHeaderProps> = ({onClickBack, children}) => {
  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.textPrimary), BlendMode.SrcIn),
  );

  const {width} = useWindowDimensions();
  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Soba Band',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <Rect x={0} y={0} width={width} height={60}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(400, 300)}
            colors={[
              'rgba(235, 243, 250,0.0985)',
              'rgba(221, 231, 243,0.5392)',
            ]}
          />
        </Rect>
      </Canvas>
      {navigation.canGoBack() && (
        <Pressable onPress={onClickBack} style={styles.backBtn}>
          <Canvas style={{width: 14, height: 13}}>
            <Group layer={paint}>
              <ImageSVG svg={backIcon()} x={0} y={0} />
            </Group>
          </Canvas>
        </Pressable>
      )}
      <AppText lineHeight={16} style={styles.headerTitle}>
        {children}
      </AppText>
    </View>
  );
};

export default AppHeader;
