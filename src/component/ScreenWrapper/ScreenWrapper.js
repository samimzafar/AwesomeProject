import {ImageBackground, SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {ImageConst} from '../../utils/ImageConstants';

export const ScreenWrapper = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.mainContainer}
        source={ImageConst.homeBackground}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};
