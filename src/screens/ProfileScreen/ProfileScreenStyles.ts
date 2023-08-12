import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  canvas: {width: '100%', height: '100%'},
  canvasContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileContainer: {
    borderWidth: 1,
    height: 270,
    position: 'absolute',
    width: '75%',
    top: 55,
    borderRadius: 30,
  },
});
