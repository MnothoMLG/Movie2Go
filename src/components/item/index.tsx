import { colors } from '@theme';
import React, { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Margin, Image, Text, Row } from '@components';
import { useTranslation } from '@hooks/useTranslationHook';
import { IMovie } from '@constants/types';

interface Props extends TouchableOpacityProps {
  item: IMovie;
  onPress: () => void;
}

export const MovieItem: FC<Props> = ({ onPress, item }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}
    >
      <View style={styles.bg} />

      <Row align='flex-end' flexWrap='nowrap' style={styles.padding}>
        <Image
          style={styles.img}
          resizeMode='stretch'
          source={{ uri: item['#IMG_POSTER'] }}
        />
        <Margin ml={8} mr={8} style={{ flexWrap: 'nowrap' }}>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            color={colors.white}
            bold
            size={16}
            lh={22.4}
          >
            {item['#AKA']}
          </Text>
          <Text color={colors.grey20} mr={4} size={12} lh={22.4}>
            {item['#ACTORS']}
          </Text>
          <Text
            numberOfLines={1}
            color={colors.grey50}
            mr={4}
            size={13}
            lh={22.4}
          >
            {t('common.rank')}
            {': '}
            {item['#RANK']}
          </Text>
        </Margin>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.transparent,
    height: 152,
    flexDirection: 'row',
    paddingVertical: 12,
    marginBottom: 16,
  },
  padding: { paddingHorizontal: 12, maxWidth: '75%' },
  bg: {
    backgroundColor: colors.greyBG,
    position: 'absolute',
    bottom: 0,
    height: 92,
    width: '100%',
    borderRadius: 8,
  },
  img: {
    height: '100%',
    width: 92,
    borderRadius: 8,
    backgroundColor: colors.grey100,
  },
});
