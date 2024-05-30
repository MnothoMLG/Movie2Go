import React from 'react';
import * as Animatable from 'react-native-animatable';
import colors from '@theme/colors';
import { Text } from '../text';
import { AppButton } from '../appButton';
import { StyleSheet } from 'react-native';
import { useTranslation } from '@hooks';

export function NoConnectionToast({
  retry,
  loading,
}: {
  retry: () => void;
  loading: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Animatable.View style={styles.container}>
      <Text size={14} color={colors.primary}>
        {t('common.noConnect')}
      </Text>

      <AppButton
        br={4}
        loading={loading}
        onPress={retry}
        style={{ height: 30, width: 80 }}
        label={t('common.retry')}
      />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 4,
    width: '90%',
    bottom: 32,
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.static,
  },
});
