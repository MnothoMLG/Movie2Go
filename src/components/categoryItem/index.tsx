import React, { FC } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Text } from '../text';
import { colors } from '@theme/index';
import { ArrowRight, LogoIcon } from '@assets/icons';
import styles from './styles';
import { Column, Row } from '@components/layout/layout';
import Image from '@components/image';
export { BlankBlock } from './Block';

interface Props extends TouchableOpacityProps {
  lowest?: boolean;
  block?: boolean;
  name: string;
  image?: string;
}

export const CategoryItem: FC<Props> = ({
  lowest,
  block,
  image,
  name,
  ...rest
}) => {
  const size = block ? 64 : 32;
  const textMargin = block ? undefined : 8;
  const Container = block ? Column : Row;

  return (
    <TouchableOpacity style={block ? styles.block : styles.container} {...rest}>
      <Container
        align='center'
        style={{
          flex: 1,
          flexWrap: 'nowrap',
          alignItems: 'center',
          marginRight: block ? 0 : 16,
        }}
      >
        {image ? (
          <Image
            style={{ width: size, height: size }}
            source={{ uri: image }}
          />
        ) : (
          <LogoIcon
            width={size}
            height={size}
            fill={colors.primary}
            style={styles.icon}
          />
        )}
        <Text
          bold
          numberOfLines={block ? 2 : 1}
          ml={textMargin}
          ellipsizeMode='tail'
          mr={textMargin}
          mt={block ? 4 : 0}
          size={16}
          align={block ? 'center' : undefined}
        >
          {name}
        </Text>
      </Container>

      {!lowest && !block && (
        <ArrowRight width={16} height={16} color={colors.grey50} />
      )}
    </TouchableOpacity>
  );
};
