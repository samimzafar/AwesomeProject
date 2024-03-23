import {Text, View} from 'react-native';
import {styles} from './styles';
export const ErrorComponent = ({errorMessage}) => {
  return (
    <View>
      <Text style={styles.errorText}>
        Sorry!{`\n`} An error occurred:{`\n`} {errorMessage}
      </Text>
    </View>
  );
};
