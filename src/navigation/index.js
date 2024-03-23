import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenStackNavigator} from './ScreenStackNavigator';
export const Navigation = () => {
  return (
    <NavigationContainer>
      <ScreenStackNavigator />
    </NavigationContainer>
  );
};
