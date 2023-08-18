import {Canvas, Text, useFont} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  View,
  Image,
  ScrollView,
} from 'react-native';
import AppBackground from '../../atoms/AppBackground/AppBackground';
import AppButton from '../../atoms/AppButton/AppButton';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {useLoginMutation} from '../../feature/services/login';
import {UnAuthenticatedNavProps} from '../../navigation/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';
import {styles} from './LandingScreenStyles';

const LandingScreen: React.FC<UnAuthenticatedNavProps<'LandingScreen'>> = ({
  navigation,
}) => {
  const fontSize = 12;
  const font = useFont(
    require('../../assets/fonts/Lato-Regular.ttf'),
    fontSize,
  );

  const [mobile, setMobile] = useState<string>('');

  const [login, result] = useLoginMutation();

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

        <View style={styles.inputContainer}>
          <AppInputBox
            width={horizontalScale(327)}
            height={58}
            label="Mobile"
            keyboardType="phone-pad"
            textAlign="center"
            maxLength={10}
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
        </View>

        <AppButton
          width={horizontalScale(327)}
          height={60}
          x={24}
          y={15}
          fontSize={18}
          btnStyle={styles.btn}
          onPress={() => {
            // navigation.navigate('OtpScreen');
            return login({
              mobile: mobile,
            });
          }}>
          Sign in
        </AppButton>
        <AppText lineHeight={12} style={styles.notRegisteredText}>
          Not Registered? Sign Up
        </AppText>
      </KeyboardAvoidingView>
    </AppBackground>
  );
};

export default LandingScreen;
