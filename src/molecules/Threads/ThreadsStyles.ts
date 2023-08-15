import {Dimensions, StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '85%',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 5,
  },
  userName: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 12,
    marginBottom: 5,
  },
  thread: {
    fontFamily: FontFamily.LatoRegular,
    fontSize: 14,
    backgroundColor: 'rgba(149, 151, 161,0.09)',
    padding: 10,
    borderRadius: 10,
  },
});
