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
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 34,
    justifyContent: 'flex-end',
  },
});
