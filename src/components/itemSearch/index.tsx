import { colors } from '@theme/index';
import React, { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Row } from '../layout/layout';
import { Text } from '../text';
import Image from '../image';
import { useTranslation } from '@hooks/useTranslationHook';
import { price } from '@util';
import { IMovie } from '@constants/types';
import { placeholderImg } from '@constants/index';

interface Props extends TouchableOpacityProps {
  plus?: () => void;
  item: IMovie;
}

export const ItemSearch: FC<Props> = ({ plus, item, ...rest }) => {
  const { t } = useTranslation();
  const discount = 0;
  const inStock = item.store_stock;
  return (
    <TouchableOpacity {...rest} style={styles.container} disabled={!inStock}>
      <Row align='center' style={{ flex: 1 }}>
        <Image
          style={styles.img}
          source={{
            uri: item?.data?.image ?? placeholderImg,
          }}
        />
        <Text
          numberOfLines={2}
          color={inStock ? colors.grey100 : colors.grey20}
          ml={8}
          mr={8}
          size={13}
          style={{ flex: 1 }}
        >
          {item?.data?.name}
        </Text>
      </Row>
      {inStock ? (
        <Row jusify='flex-end' align='center'>
          <Text
            style={discount ? styles.strikeThru : undefined}
            color={colors.grey100}
            bold
            mr={4}
            size={13}
          >
            {price(item?.store_price)}
          </Text>
          {!discount ? (
            <Text color={colors.grey60} size={13}>
              {t('order.each')}
            </Text>
          ) : (
            <Text color={colors.primary} bold size={13}>
              {price(discount)}
            </Text>
          )}
        </Row>
      ) : (
        <Text size={10} color={colors.static} bold style={styles.out}>
          {t('store.outOfStockProd')}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: colors.greyBG,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  out: {
    padding: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  strikeThru: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  img: {
    width: 32,
    height: 32,
  },
});
