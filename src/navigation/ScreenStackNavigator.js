import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';
import {SCREEN_CONST} from '../utils/Constants';
const ScreenStack = createNativeStackNavigator();
export const ScreenStackNavigator = () => {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen name={SCREEN_CONST.HOME_SCREEN} component={Home} />
      <ScreenStack.Screen
        name={SCREEN_CONST.DETAILS_SCREEN}
        component={Details}
      />
    </ScreenStack.Navigator>
  );
};
