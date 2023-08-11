import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 300,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  btn: {width: '100%', height: 100},
  title: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    // width: '80%',
    paddingVertical: 20,
  },
});
