import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import colors from '@theme/colors';

export const BlankBlock: FC<unknown> = () => {
  return (
    <View style={[styles.block, { backgroundColor: colors.transparent }]} />
  );
};
