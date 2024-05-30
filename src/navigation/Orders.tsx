import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';
import { Orders, OrderDetails } from '@screens';
import { Header } from '@components';
import { OrdersStackParamList } from './types';

const OrdersStackNav = createStackNavigator<OrdersStackParamList>();

export const OrdersStack = ({ modal }: { modal?: boolean }) => (
  <OrdersStackNav.Navigator initialRouteName={routes.ORDERS}>
    <OrdersStackNav.Screen
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
      name={routes.ORDERS}
      component={Orders}
    />
    <OrdersStackNav.Screen
      options={{
        header: ({ route }) => (
          <Header inModal={modal} title={route?.name} variant='basic' />
        ),
      }}
      name={routes.ORDER_DETAILS}
      component={OrderDetails}
    />
  </OrdersStackNav.Navigator>
);
