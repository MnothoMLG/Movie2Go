import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from './routes';
import { MovieDeatialsScreen, Favourites, Home } from '@screens';
import { HomeTabParamList, MainStackParamList } from './types';
import { noHeader } from '@config';
import CustomTabBar from './CustomTabBar';
import colors from '@theme/colors';

const MainStackNav = createStackNavigator<MainStackParamList>();

const Tab = createBottomTabNavigator<HomeTabParamList>();
const tabs: String[] = [routes.HOME, routes.FAVS];

export const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.greyBG,
        },
        headerTitleStyle: { color: colors.white },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.FAVS} component={Favourites} />
    </Tab.Navigator>
  );
};

export const MainStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{
        ...noHeader,
      }}
      initialRouteName={routes.HOME}
    >
      <MainStackNav.Group
        screenOptions={{
          presentation: 'modal',
          ...noHeader,
        }}
      >
        <MainStackNav.Screen
          name={routes.DETAILS}
          {...noHeader}
          children={() => <MovieDeatialsScreen />}
        />
      </MainStackNav.Group>

      <MainStackNav.Screen
        name={routes.HOME}
        {...noHeader}
        children={() => <TabNav />}
      />

      <MainStackNav.Screen
        {...noHeader}
        name={routes.FAVS}
        component={Favourites}
      />
    </MainStackNav.Navigator>
  );
};
