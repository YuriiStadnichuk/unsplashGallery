import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, fonts } from '../../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('7.8%'),
    backgroundColor: colors.MAIN_THEME_HEDER,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftBlock: {
    flex: 1,
     },
  rightBlock: {
    flex: 1,
  },
  centralBlock: {
    alignItems: 'center',
    flex: 5,
  },
  title: {
    fontSize: RFValue(16, 640),
    textAlign: 'center',
    fontFamily: fonts.AlegreyaBold,
    color: 'white',
    paddingRight: 50
  },
  back: {
    fontSize: RFValue(16, 240),
    color: 'white',
  }

});
