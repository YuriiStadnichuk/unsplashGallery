import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../../constants';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.MAIN_THEME,
    
  },
  image: {
    width: "100%",
    // resizeMode: "contain",
    flex: 1,
    alignItems: "baseline",
    margin: wp('1.1%'),
    paddingHorizontal: hp('5.5%'),
  }
});
