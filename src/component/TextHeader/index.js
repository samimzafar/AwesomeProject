import {ActivityIndicator, Text, View} from 'react-native';
import FontFamily from '../../utils/FontFamily';
import {AppColors} from '../../utils/ColorConstants';
import {height, width, totalSize} from 'react-native-dimension';
export const TextHeader = () => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontFamily: FontFamily.QuicksandSemiBold,
        fontSize: totalSize(1.5),
        color: AppColors.white,
        lineHeight: height(3),
      }}>
      Showing different Product listing from {`\n`}
      <Text
        style={{
          fontFamily: FontFamily.QuicksandBold,
          fontSize: totalSize(1.8),
        }}>
        DummyJsonAPI Server
      </Text>
    </Text>
  );
};
