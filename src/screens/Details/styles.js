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
    alignItems: 'center',
    paddingHorizontal: width(6),
  },
  productView: {
    flex: 1,
    width: width(100),
    backgroundColor: AppColors.black3,
    borderRadius: totalSize(1),
    paddingHorizontal: width(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImageStyle: {
    width: width(65),
    height: height(20),
    borderRadius: totalSize(3),
  },

  tableView: {
    width: width(80),
    borderRadius: totalSize(0.6),
    borderColor: AppColors.white,
    borderWidth: width(0.2),
    marginBottom: height(2),
    backgroundColor: AppColors.black3,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: AppColors.white,
    borderBottomWidth: width(0.2),
    paddingVertical: height(1),
    minHeight: height(6),
  },
  productTextStyle: {
    width: width(20),
    fontFamily: FontFamily.QuicksandBold,
    fontSize: totalSize(1.5),
    color: AppColors.white,
    lineHeight: height(3),
    textAlign: 'center',
  },

  productTextValueStyle: {
    width: width(40),
    fontFamily: FontFamily.QuicksandBold,
    fontSize: totalSize(1.5),
    color: AppColors.goldYellow,
    lineHeight: height(3),
  },
  heightSpacer: value => {
    return {
      height: height(value),
    };
  },
  contentContainerStyle: {
    paddingBottom: height(2),
  },
});
