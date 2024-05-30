import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';
import {
  Orders,
  OrderDetails,
  Store,
  ProductList,
  SubCategories,
} from '@screens';
import { Header } from '@components';
import { StoreStackNavigatorParamList } from './types';

const StoreStackNav = createStackNavigator<StoreStackNavigatorParamList>();

export const StoreStack = ({ modal }: { modal?: boolean }) => (
  <StoreStackNav.Navigator initialRouteName={routes.STORE_SCREEN}>
    <StoreStackNav.Screen
      options={{
        header: ({ route }) => (
          <Header
            overrideBack={!modal}
            inModal={modal}
            title={route?.name}
            variant='basic'
          />
        ),
      }}
      name={routes.STORE_SCREEN}
      component={Store}
    />
    <StoreStackNav.Screen name={routes.ITEMS} component={ProductList} />
    <StoreStackNav.Screen
      name={routes.SUB_CATEGORIES}
      component={SubCategories}
    />
  </StoreStackNav.Navigator>
);
