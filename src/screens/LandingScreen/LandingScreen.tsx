import {useFont} from '@shopify/react-native-skia';
import React from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import AppBackground from '../../atoms/AppBackground/AppBackground';
import AppButton from '../../atoms/AppButton/AppButton';
import AppText from '../../atoms/AppText/AppText';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {styles} from './LandingScreenStyles';

const LandingScreen: React.FC<UnAuthenticatedNavProps<'LandingScreen'>> = ({
  navigation,
}) => {
  const fontSize = 12;
  const font = useFont(
    require('../../assets/fonts/Lato-Regular.ttf'),
    fontSize,
  );

  return (
    <AppBackground style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/headline.jpg')}
            style={styles.mainImage}
          />
          <View style={styles.supportingImageContainer}>
            <Image
              source={require('../../assets/images/news.jpg')}
              style={[
                styles.supportingImage,
                {
                  marginBottom: 5,
                },
              ]}
            />
            <Image
              source={require('../../assets/images/talking.jpg')}
              style={styles.supportingImage}
            />
          </View>
        </View>
        <AppText lineHeight={28} style={styles.title}>
          Welcome back {`\n`}to Headline
        </AppText>

        <View style={styles.btnContainer}>
          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={15}
            fontSize={18}
            btnStyle={styles.btn}
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}>
            Create Account
          </AppButton>
          <AppButton
            width={horizontalScale(327)}
            height={60}
            x={24}
            y={15}
            fontSize={18}
            btnStyle={styles.btn}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            Sign in
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </AppBackground>
  );
};

export default LandingScreen;
