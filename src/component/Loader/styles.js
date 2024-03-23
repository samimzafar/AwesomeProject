import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/ColorConstants';
import {height, width, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  loaderText: {
    fontFamily: FontFamily.QuicksandBold,
    fontSize: totalSize(3),
    color: AppColors.goldYellow,
  },

  activityIndicatorStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
