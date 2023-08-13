import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  canvas: {width: '100%', height: '100%'},
  canvasContainer: {
    width: '100%',
    height: 360,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileContainer: {
    height: 270,
    position: 'absolute',
    width: '82%',
    top: 55,
    borderRadius: 30,
    padding: 16,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  connectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  connection: {
    alignItems: 'center',
  },
  connectionCount: {
    fontSize: 16,
    fontFamily: FontFamily.LatoBold,
  },
  connectionTitle: {
    fontSize: 12,
    fontFamily: FontFamily.LatoRegular,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  btnText: {
    fontSize: 14,
    fontFamily: FontFamily.LatoRegular,
  },
  connectionDetail: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    marginRight: 5,
    height: 30,
    paddingVertical: 2,
  },
  nameContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: FontFamily.LatoBold,
  },
  desc: {
    fontSize: 14,
    fontFamily: FontFamily.LatoRegular,
    opacity: 0.8,
  },
  about: {
    fontSize: 12,
    fontFamily: FontFamily.LatoRegular,
    opacity: 0.8,
    marginTop: 8,
  },
  threadContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  threadTitleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  threadCount: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 16,
  },
  threadTitle: {
    fontSize: 16,
    fontFamily: FontFamily.LatoRegular,
    marginLeft: 5,
  },
});
