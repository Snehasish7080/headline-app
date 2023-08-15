import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Paint,
  RoundedRect,
  Shadow,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo, useState} from 'react';
import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {
  commentIcon,
  heartFilledIcon,
  heartIcon,
  shareIcon,
} from '../../assets/icons/icons';
import AppText from '../../atoms/AppText/AppText';
import {AuthenticatedRouteList} from '../../navigation/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {Colors} from '../../utils/theme';
import {styles} from './ThreadComponentStyles';

type ThreadComponentProps = {
  showImage?: boolean;
  showText?: boolean;
  content?: string;
};
const ThreadComponent: React.FC<ThreadComponentProps> = ({
  showText,
  showImage,
  content,
}) => {
  const {width} = useWindowDimensions();
  const [height, setHeight] = useState(0);
  const [isLiked, setLsLiked] = useState(false);

  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();

  const handleLiked = () => {
    setLsLiked(!isLiked);
  };

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.textPrimary), BlendMode.SrcIn),
  );

  const filledPaint = useMemo(() => Skia.Paint(), []);
  filledPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.heart), BlendMode.SrcIn),
  );
  return (
    <View
      style={[
        styles.canvasContainer,
        {
          height: showText ? height + 80 : 230 + 30,
        },
      ]}>
      <Canvas style={[styles.canvas]}>
        <Group color={Colors.btnBackground}>
          <RoundedRect
            x={(width - 32) / 2 - width / 1.15 / 2}
            y={20}
            width={width / 1.15}
            height={showText ? height : 180}
            r={20}>
            <Paint
              color={'rgba(136, 165, 191, 0.04)'}
              style="stroke"
              strokeWidth={1}
            />
            <Shadow dx={2} dy={1} blur={3} color="rgba(136, 165, 191, 0.48)" />
            <Shadow dx={-3} dy={-2} blur={4} color="rgba(255, 255, 255, 1)" />
          </RoundedRect>
        </Group>
      </Canvas>
      <View
        style={[
          styles.contentContainer,
          {
            height: showText ? height : 180,
          },
        ]}>
        {showImage && (
          <Image
            source={{
              uri: content,
            }}
            style={styles.image}
          />
        )}

        {showText && (
          <AppText lineHeight={16} style={styles.content}>
            {content}
          </AppText>
        )}
      </View>
      {showText && (
        <AppText
          lineHeight={16}
          style={[{opacity: 0, position: 'absolute', paddingVertical: 27}]}
          onLayout={e => {
            setHeight(e.nativeEvent.layout.height);
          }}>
          {content}
        </AppText>
      )}
      <View style={styles.userContainer}>
        <View style={styles.actionContainer}>
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleLiked}>
              <Canvas style={{width: 22, height: '100%'}}>
                <Group layer={isLiked ? filledPaint : paint}>
                  <ImageSVG
                    svg={isLiked ? heartFilledIcon(18, 21) : heartIcon(18, 21)}
                    x={2}
                    y={3}
                  />
                </Group>
              </Canvas>
            </TouchableOpacity>
            <AppText lineHeight={12} style={styles.count}>
              10K
            </AppText>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ThreadScreen');
              }}>
              <Canvas style={{width: 22, height: '100%'}}>
                <Group layer={paint}>
                  <ImageSVG svg={commentIcon(18, 21)} x={2} y={3} />
                </Group>
              </Canvas>
            </TouchableOpacity>
            <AppText lineHeight={12} style={styles.count}>
              1K
            </AppText>
          </View>
          <View style={styles.actions}>
            <Canvas style={{width: 22, height: '100%'}}>
              <Group layer={paint}>
                <ImageSVG svg={shareIcon(18, 21)} x={2} y={3} />
              </Group>
            </Canvas>
            <AppText lineHeight={12} style={styles.count}>
              5K
            </AppText>
          </View>
        </View>
        <View>
          <AppText lineHeight={12} style={styles.userName}>
            @Jacques Webster
          </AppText>
        </View>
      </View>
      <View style={styles.threadOuterContainer}>
        <View style={styles.threadContainer}>
          <AppText lineHeight={12} style={styles.userName}>
            @Soba
          </AppText>
          <AppText lineHeight={12} style={styles.threads} numberOfLines={1}>
            We absolutely need to get
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default ThreadComponent;
