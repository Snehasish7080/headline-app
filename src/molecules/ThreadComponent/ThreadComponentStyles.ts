import {Dimensions, StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  canvas: {width: '100%', height: '100%'},
  canvasContainer: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  contentContainer: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    height: 180,
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 1.15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    fontFamily: FontFamily.LatoRegular,
    padding: 16,
  },
  actionContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 180,
  },
  count: {
    fontSize: 12,
    fontFamily: FontFamily.LatoRegular,
    marginLeft: 5,
    marginRight: 15,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },
  userContainer: {
    position: 'absolute',
    height: 30,
    bottom: 20,
    left: 20,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 12,
    fontFamily: FontFamily.LatoBold,
  },
  threadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  threads: {
    fontSize: 12,
    fontFamily: FontFamily.LatoRegular,
    marginLeft: 10,
    maxWidth: 120,
  },
  threadOuterContainer: {
    borderColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 15,
  },
});
