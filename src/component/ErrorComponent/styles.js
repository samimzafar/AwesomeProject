import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/ColorConstants';
import {height, width, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  errorText: {
    fontFamily: FontFamily.QuicksandBold,
    fontSize: totalSize(3),
    color: 'rgba(255, 0, 0, .8) ',
    lineHeight: height(4),
  },
});
