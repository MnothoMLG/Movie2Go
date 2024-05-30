import { colors } from '../../theme';
import { FC } from 'react';
import { TextProps, Text as RnText } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TextProps {
  bold?: boolean;
  align?: string;
  xtraBold?: boolean;
  thin?: boolean;
  size?: number;
  color?: string;
  ml?: number;
  mb?: number;
  mt?: number;
  fw?: number;
  mr?: number;
  link?: boolean;
  lh?: number;
}
export const Text: FC<Props> = styled(RnText).attrs(() => {
  maxFontSizeMultiplier: 1;
  allowFontScaling: false;
})`
  font-size: ${(props: Props) => `${props.size ? props.size : 13}px`};
  flex-wrap: wrap;
  text-align: ${(props: Props) => (props.align ? props.align : 'left')};
  font-family: ${(props: Props) =>
    props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
  margin-left: ${(props: Props) => `${props.ml || 0}px`};
  margin-right: ${(props: Props) => `${props.mr || 0}px`};
  margin-bottom: ${(props: Props) => `${props.mb || 0}px`};
  margin-top: ${(props: Props) => `${props.mt || 0}px`};
  line-height: ${(props: Props) =>
    `${
      props.lh ? `${props.lh}` : props.size ? `${props.size * 1.4}` : 18.2
    }px`};
  color: ${(props: Props) =>
    props.link ? colors.blue : props.color || colors.static};

  ${(props: Props) =>
    props.link ? 'text-decoration: underline; text-decoration-color: blue' : ''}
}


`;
