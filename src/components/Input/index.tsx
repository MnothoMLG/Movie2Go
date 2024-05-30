/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import styles from './Styles';
import { Text } from '@components/text';
import { CrossIcon, SearchIcon } from '../../assets';
import { colors } from '@theme';
import { useIsFocused } from '@react-navigation/native';
import { Row } from '@components/layout/layout';

interface IProps extends TextInputProps {
  style?: Record<string, unknown> | Record<string, unknown>[];
  wrapperStyle?: StyleProp<ViewStyle>;
  error?: string;
  centerText?: boolean;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  search?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (v: string) => void;
}

const Input = ({
  style = {},
  label,
  centerText,
  wrapperStyle,
  search,
  required,
  error,
  disabled,
  ...props
}: IProps) => {
  const textChanged = (text: string): void => {
    props.onChangeText && props.onChangeText(text);
  };
  const [value, setValue] = useState('');
  const searchRef: any = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && props?.autoFocus) {
      searchRef?.current?.focus();
    }
  }, [isFocused]);

  return (
    <View style={wrapperStyle}>
      {!!label && (
        <Row marginBottom={8}>
          <Text color={colors.white} style={styles.leftAlign} bold>
            {label.toUpperCase()}
          </Text>
          {required && (
            <Text bold style={styles.required}>
              *
            </Text>
          )}
        </Row>
      )}
      <View style={[styles.container, style]}>
        <TextInput
          placeholderTextColor={colors.grey20}
          style={[
            styles.input,
            centerText && styles.centerText,
            disabled && { color: colors.grey40 },
          ]}
          ref={searchRef}
          placeholder={props.placeholder || ''}
          cursorColor={colors.blue}
          selectionColor={`${colors.blue}A1`}
          editable={!disabled}
          {...props}
          onChangeText={(text: string) => {
            textChanged(text);
            setValue(text);
          }}
          value={value}
          onFocus={() => {
            props?.onFocus && props?.onFocus?.();
          }}
          onBlur={() => {
            props?.onBlur && props?.onBlur?.();
          }}
        />

        {search && (
          <TouchableOpacity
            onPress={() => {
              setValue('');
              textChanged('');
            }}
            style={styles.search}
          >
            {value ? (
              <CrossIcon width={20} color={colors.white} />
            ) : (
              <SearchIcon color={colors.white} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default Input;
