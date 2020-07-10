import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../../../constants';

export default StyleSheet.create({
  container: {
    height: hp('21%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    width: wp("98%"),
    height: hp('21%')
  },
  title: {
    fontFamily: fonts.AlegreyaBold,
    fontSize: 20,
    color: colors.MAIN_THEME,
    marginLeft:10,
    
  },
  title1: {
    fontFamily: fonts.AlegreyaRegular,
    fontSize: 14,
    color: colors.MAIN_THEME,
    marginLeft:wp("50%"),
  }
});
