import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 400,
    padding: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0,0.8392)',
  },
});
