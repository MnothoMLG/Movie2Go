import React, { FC } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Text } from '@components';
import colors from '@theme/colors';
import { SearchIcon, HeartIcon } from '@assets';
import { routes } from './routes';
import { SvgProps } from 'react-native-svg';
const tabHeight = 104;

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const routeName = route.name;
          const Icon = tabIcons[routeName];
          const color = isFocused ? colors.white : colors.grey70;

          return (
            <TouchableWithoutFeedback
              key={index}
              accessibilityRole='button'
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPressIn={() => navigation.navigate(route.name)}
            >
              <View style={styles.item}>
                {options?.tabBarBadge ? (
                  <View style={styles.badge}>
                    <Text bold color={colors.white} size={12}>
                      {options?.tabBarBadge}
                    </Text>
                  </View>
                ) : null}
                <Icon width={24} height={24} color={color} />
                <Text bold={isFocused} mt={5} color={color} size={12} lh={13}>
                  {route.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </>
  );
};

export const tabIcons: { [key: string]: FC<SvgProps> } = {
  [routes.HOME]: SearchIcon,
  [routes.FAVS]: HeartIcon,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.greyBG,
    alignItems: 'flex-start',
    paddingTop: 16,
    height: tabHeight,
    borderTopColor: colors.grey50,
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    paddingHorizontal: 5,
    elevation: 5,
  },
  padding: {
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -4,
    right: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  activeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

export default CustomTabBar;
