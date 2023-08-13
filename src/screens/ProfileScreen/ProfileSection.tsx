import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from './ProfileScreenStyles';
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
import {Colors} from '../../utils/theme';
import AppText from '../../atoms/AppText/AppText';
import AppOutlinedButton from '../../atoms/AppOutlinedButton/AppOutlinedButton';
import {messageIcon, settingIcon} from '../../assets/icons/icons';

const ProfileSection = () => {
  const {width} = useWindowDimensions();

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.textPrimary), BlendMode.SrcIn),
  );
  return (
    <>
      <TouchableOpacity style={styles.settingContainer} activeOpacity={0.5}>
        <Canvas style={{width: '100%', height: '100%'}}>
          <Group layer={paint}>
            <ImageSVG svg={settingIcon()} x={10} y={10} />
          </Group>
        </Canvas>
      </TouchableOpacity>
      <View style={styles.canvasContainer}>
        <Canvas style={styles.canvas}>
          <Group color={Colors.btnBackground}>
            <RoundedRect
              x={width / 2 - width / 1.3 / 2 - 16}
              y={20}
              width={width / 1.3}
              height={280}
              r={30}>
              <Paint
                color={'rgba(136, 165, 191, 0.04)'}
                style="stroke"
                strokeWidth={1}
              />
              <Shadow
                dx={2}
                dy={1}
                blur={3}
                color="rgba(136, 165, 191, 0.48)"
              />
              <Shadow dx={-3} dy={-2} blur={4} color="rgba(255, 255, 255, 1)" />
            </RoundedRect>
          </Group>
        </Canvas>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
              }}
              style={styles.profilePic}
            />
            <View style={styles.connectionDetail}>
              <View style={styles.connectionContainer}>
                <View style={styles.connection}>
                  <AppText lineHeight={16} style={styles.connectionCount}>
                    7.4M
                  </AppText>
                  <AppText lineHeight={12} style={styles.connectionTitle}>
                    Followers
                  </AppText>
                </View>
                <View
                  style={[
                    styles.connection,
                    {
                      marginLeft: 16,
                    },
                  ]}>
                  <AppText lineHeight={16} style={styles.connectionCount}>
                    117
                  </AppText>
                  <AppText lineHeight={12} style={styles.connectionTitle}>
                    Following
                  </AppText>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <AppOutlinedButton
                  textLineHeight={14}
                  textStyle={styles.btnText}
                  style={styles.btn}>
                  Follow
                </AppOutlinedButton>
                <AppOutlinedButton
                  textLineHeight={12}
                  textStyle={styles.btnText}
                  style={[styles.btn, {flex: 0}]}>
                  <Canvas style={{width: 18, height: '100%'}}>
                    <Group layer={paint}>
                      <ImageSVG svg={messageIcon()} x={2} y={3} />
                    </Group>
                  </Canvas>
                </AppOutlinedButton>
              </View>
            </View>
          </View>

          <View style={styles.nameContainer}>
            <AppText lineHeight={18} style={styles.name}>
              Saba
            </AppText>
            <AppText lineHeight={14} style={styles.desc}>
              Band / Musician
            </AppText>
            <AppText lineHeight={12} style={styles.about}>
              PIVOTGANG 🏀 {`\n`}CARE FOR ME TOUR OUT NOW 🎙 {`\n`}#CHI-TOWN{' '}
              {`\n`}
              This remind me of before we had insomnia Sleepin' peacefully,
              never needed a pile of drugs
            </AppText>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileSection;
