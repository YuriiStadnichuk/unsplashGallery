import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colors, fonts } from '../constants';

export default StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleH1: {
    fontFamily: fonts.AlegreyaRegular,
    fontSize: 30,
    color: 'white',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
  },
  loginTitle: {
    fontFamily: fonts.AlegreyaRegular,
    fontSize: 18,
    lineHeight: 20,
    color: 'white',
  },
  whiteTitle: {
    fontFamily: fonts.AlegreyaBold,
    fontSize: 16,
    color: 'white',
  },
  grayTitle: {
    fontFamily: fonts.AlegreyaBold,
    fontSize: 16,
    color: colors.GRAY_TITLE_TEXT,
  },
  grayPrice: {
    fontFamily: fonts.AlegreyaBold,
    fontSize: 20,
    color: colors.GRAY_TITLE_TEXT,
  },
  grayRegularText: {
    fontFamily: fonts.AlegreyaRegular,
    fontSize: 16,
    lineHeight: 20,
    color: colors.GRAY_TITLE_TEXT,
  },
});
