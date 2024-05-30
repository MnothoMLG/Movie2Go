import { AppButton } from '@components/appButton';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '@theme/colors';
import { useTranslation } from '@hooks/useTranslationHook';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';

interface Props {
  light?: boolean;
}

export const BackButton: FC<TouchableOpacityProps & Props> = ({
  onPress,
  light,
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <AppButton
      textSize={13}
      style={[styles.back, light && styles.lightBg]}
      br={2}
      bold
      onPress={(e) => {
        onPress ? onPress(e) : navigation.canGoBack() && navigation.goBack();
      }}
      textColor={light ? colors.primary : undefined}
      variant='secondary'
      label={t('common.back').toUpperCase()}
    />
  );
};

const styles = StyleSheet.create({
  back: {
    width: 58,
    height: 30,
    paddingHorizontal: 8,
  },
  lightBg: {
    backgroundColor: colors.white,
  },
});
