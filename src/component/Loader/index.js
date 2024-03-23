import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
export const LoaderComponent = () => {
  return (
    <View>
      <Text style={styles.loaderText}>Fetching products...</Text>
      <ActivityIndicator size="large" style={styles.activityIndicatorStyle} />
    </View>
  );
};
