import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { routes } from './routes';
import { IMovie } from '@constants/types';

export type HomeTabParamList = {
  [routes.FAVS]: undefined;
  [routes.HOME]: undefined;
};

export type MainStackParamList = {
  [routes.HOME_TAB]: undefined;
  [routes.DETAILS]: { movie: IMovie };
  [routes.FAVS]: undefined;
};

export type BottomTabNavProps = BottomTabNavigationProp<HomeTabParamList>;

export type GenericMainStackRouteProps<T extends keyof MainStackParamList> =
  RouteProp<MainStackParamList, T>;

export type GenericMainStackScreenProps<T> = NativeStackScreenProps<
  MainStackParamList,
  T
>;
