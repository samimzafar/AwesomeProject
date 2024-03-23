import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import FontFamily from '../../utils/FontFamily';
import {AppColors} from '../../utils/ColorConstants';
import {height, width, totalSize} from 'react-native-dimension';
export const ViewButton = ({onPressHanlder}) => {
  return (
    <TouchableOpacity
      onPress={onPressHanlder}
      style={{
        width: width(65),
        backgroundColor: 'rgba(38,12,47,.5)',
        height: height(5),
        borderRadius: totalSize(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: height(1),
        borderColor: AppColors.whiteGrey,
        borderWidth: width(0.3),
      }}>
      <Text
        style={{
          fontFamily: FontFamily.QuicksandBold,
          fontSize: totalSize(1.3),
          color: AppColors.goldYellow,
          lineHeight: height(2.4),
        }}>
        View Details
      </Text>
    </TouchableOpacity>
  );
};
