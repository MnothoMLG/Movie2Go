import React from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { Center, MovieItem, Text } from '@components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesState } from '@store/movies/selectors';
import { useNavigation } from '@react-navigation/native';
import { GenericMainStackScreenProps } from '@navigation/types';
import { routes } from '@navigation/routes';
import { useTranslation } from '@hooks/useTranslationHook';
import colors from '@theme/colors';
import { TrashIcon } from '@assets/icons';
import { removeFromFavourites } from '@store/actions';
import { IMovie } from '@constants/types';

const Favourites = () => {
  const { navigate } =
    useNavigation<GenericMainStackScreenProps<routes.FAVS>>();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { favourites } = useSelector(getMoviesState);

  const rightButtons = (onPress: () => void) => [
    <TouchableHighlight onPress={onPress} style={styles.dlt}>
      <TrashIcon width={20} color={colors.white} />
    </TouchableHighlight>,
  ];

  const dislike = (movie: IMovie) => {
    dispatch(removeFromFavourites({ movie }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        data={favourites}
        ListEmptyComponent={
          <Center>
            <Text>{t('favs.empty')}</Text>
          </Center>
        }
        renderItem={({ item }) => (
            <MovieItem
              onPress={() => {
                navigate(routes.DETAILS, { movie: item });
              }}
              item={item}
            />
        )}
      />
    </View>
  );
};

export default Favourites;
