import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { MainStack } from './Main';


const navigationRef = createNavigationContainerRef();

export const RootNavigation: React.FC = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};
