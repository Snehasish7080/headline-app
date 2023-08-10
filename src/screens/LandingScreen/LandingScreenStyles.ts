import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 28,
    fontFamily: FontFamily.LatoBold,
    paddingHorizontal: 24,
  },
  subTitle: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontFamily: FontFamily.LatoRegular,
    opacity: 0.6,
  },
  canvas: {width: '100%', flex: 1},
  inputContainer: {
    paddingHorizontal: 24,
    paddingVertical: 34,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  mainImage: {
    width: 202,
    height: 202,
    borderRadius: 10,
  },
  supportingImageContainer: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  supportingImage: {
    width: 130,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});
