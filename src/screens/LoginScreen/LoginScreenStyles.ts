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
    padding: 16,
    paddingHorizontal: 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0,0.8392)',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginTop: 25,
  },
  btn: {width: '100%', height: 100},
  loginTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FontFamily.LatoBold,
  },
  notRegisteredText: {
    fontSize: 12,
    color: Colors.textPrimary,
    fontFamily: FontFamily.LatoRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
});
