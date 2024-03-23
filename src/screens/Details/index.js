import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {ImageConst} from '../../utils/ImageConstants';
import {AppColors} from '../../utils/ColorConstants';
import LinearGradient from 'react-native-linear-gradient';
export const Details = ({navigation, route}) => {
  const {product} = route.params;
  const productList = [
    {key: 'Title', value: product.title},
    {key: 'Category', value: product.category},
    {key: 'Price', value: product.price},
    {key: 'Rating', value: product.rating},
    {key: 'Stock', value: product.stock},
    {key: 'Brand', value: product.brand},
    {key: 'Description', value: product.description},
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.mainContainer}
        source={ImageConst.homeBackground}>
        <LinearGradient
          colors={AppColors.lightPinkGrayGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearGradientStyle}>
          <View style={styles.productView}>
            <View style={styles.heightSpacer(2)} />
            <Image
              source={{uri: product.thumbnail}}
              style={styles.productImageStyle}
              resizeMode="contain"
            />
            <View style={styles.heightSpacer(2)} />
            <FlatList
              data={productList}
              renderItem={({item}) => (
                <View style={styles.tableView}>
                  <View style={styles.rowView}>
                    <Text style={styles.productTextStyle}>{item.key}</Text>
                    <Text style={styles.productTextValueStyle}>
                      {item.value}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.key}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};
