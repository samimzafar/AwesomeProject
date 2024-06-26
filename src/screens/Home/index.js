import {FlatList, Text, View} from 'react-native';
import {SCREEN_CONST} from '../../utils/Constants';
import {useQuery} from 'react-query';
import {retrievePosts} from '../../services';
import {styles} from './styles';
import {AppColors} from '../../utils/ColorConstants';
import LinearGradient from 'react-native-linear-gradient';
import {height} from 'react-native-dimension';
import {LoaderComponent} from '../../component/Loader';
import {TextHeader} from '../../component/TextHeader';
import {ViewButton} from '../../component/ViewButton';
import {ErrorComponent} from '../../component/ErrorComponent';
import {ScreenWrapper} from '../../component/ScreenWrapper/ScreenWrapper';
export const Home = ({navigation}) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery('postsData', retrievePosts);

  const onPressHanlder = product => {
    navigation.navigate(SCREEN_CONST.DETAILS_SCREEN, {product});
  };
  const renderProductList = ({item}) => {
    return (
      <View style={styles.productView}>
        <Text style={styles.productTextStyle('white')}>{item.title}</Text>
        <Text style={styles.productTextStyle('black')}>{item.category}</Text>
        <Text
          style={styles.productTextStyle()}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.description}
        </Text>
        <ViewButton onPressHanlder={() => onPressHanlder(item)} />
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <LinearGradient
        colors={AppColors.lightPinkGrayGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientStyle}>
        <View style={styles.heightSpacer(1)} />
        <View style={{marginBottom: height(1.3)}}>
          <TextHeader />
        </View>
        {isLoading && <LoaderComponent />}
        {error && <ErrorComponent errorMessage={error.message} />}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={renderProductList}
        />
      </LinearGradient>
    </ScreenWrapper>
  );
};
