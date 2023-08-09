import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    height: 58,
    position: 'relative',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  labelContainer: {
    flexDirection: 'column',
  },
  label: {
    color: Colors.labelText,
    fontFamily: FontFamily.LatoRegular,
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
});
