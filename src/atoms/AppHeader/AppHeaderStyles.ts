import {Dimensions, StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: FontFamily.LatoBold,
    marginLeft: 16,
  },
  backBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
