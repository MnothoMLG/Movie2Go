import colors from '@theme/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    paddingBottom: 82,
    backgroundColor: colors.transparent,
  },
  dlt: {
    alignSelf: 'flex-start',
    marginTop: 60,
    height: 92,
    width: 82,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary70,
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 24,
    paddingBottom: 0,
  },
});
