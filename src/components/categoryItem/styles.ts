import { colors } from '@theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    borderBottomColor: colors.grey10,
    borderBottomWidth: 1,
  },
  block: {
    width: width * (100 / 375),
    height: 132,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  strikeThru: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
