import {StyleSheet} from 'react-native';
import FontFamily from '../../utils/FontFamily';
import {height, width, totalSize} from 'react-native-dimension';
import {AppColors} from '../../utils/ColorConstants';
export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  linearGradientStyle: {
    flex: 1,
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(6),
  },
  productView: {
    height: height(18),
    width: width(80),
    backgroundColor: 'rgba(0,0,0,.3)',
    marginVertical: height(1),
    borderRadius: totalSize(1),
    borderColor: AppColors.whiteGrey,
    borderWidth: width(0.25),
    paddingHorizontal: width(4),
    justifyContent: 'center',
  },
  productTextStyle: color => {
    return {
      fontFamily: FontFamily.QuicksandBold,
      fontSize: totalSize(1.3),
      color: color ? color : AppColors.goldYellow,
      lineHeight: height(2.4),
    };
  },
  contentContainerStyle: {
    paddingBottom: height(4),
  },
  heightSpacer: value => {
    return {
      height: height(value),
    };
  },
});
