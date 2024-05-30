import { ActivityIndicator, Modal, StyleSheet } from 'react-native';
import { FC } from 'react';
import { FETCH_MOVIES_LOADING_KEY } from '@store/actions';
import colors from '@theme/colors';
import { Text } from '@components/text';
import { Center } from '@components/layout/layout';
import { useTranslation, useLoading } from '@hooks';

export const LoadingOverlay: FC<unknown> = () => {
  const loading = useLoading(FETCH_MOVIES_LOADING_KEY);
  const { t } = useTranslation();

  return (
    <Modal transparent visible={loading}>
      <Center style={styles.wrapper}>
        <ActivityIndicator color={colors.primary} size='large' />

        <Text color={colors.white}>{t('loading.wait')}</Text>
      </Center>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    backgroundColor: `${colors.dark}A1`,
  },
});
