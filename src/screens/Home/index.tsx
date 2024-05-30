import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Center, Input, Text, MovieItem } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '@theme';
import _ from 'lodash';
import { useTranslation } from '@hooks';
import { fetchMoviesRequest } from '@store/actions';
import { getMoviesState } from '@store/movies/selectors';
import { useNavigation } from '@react-navigation/native';
import { GenericMainStackScreenProps } from '@navigation/types';
import { routes } from '@navigation/routes';

const MovieDetailsScreen = () => {
  const [query, setQuery] = useState('');
  const { navigate } =
    useNavigation<GenericMainStackScreenProps<routes.HOME>>();
  const { all_movies } = useSelector(getMoviesState);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  let debounceTimeOut: { (): void; (): void; cancel: any };

  useEffect(() => {
    dispatch(fetchMoviesRequest({ query }));
  }, [query]);

  return (
    <View style={styles.container}>
      <Input
        onChangeText={(text) => {
          debounceTimeOut && debounceTimeOut.cancel();
          debounceTimeOut = _.debounce(() => {
            setQuery(text);
            dispatch(fetchMoviesRequest({ query: text }));
          }, 500);
          debounceTimeOut();
        }}
        value={query}
        placeholder={t('common.search')}
        search
        style={styles.input}
      />

      <FlatList
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        data={all_movies}
        renderItem={({ item }) => (
          <MovieItem
            onPress={() => {
              navigate(routes.DETAILS, { movie: item });
            }}
            item={item}
          />
        )}
        ListEmptyComponent={
          <Center>
            <Text>{t('search.noResults')}</Text>
          </Center>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.greyBG,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: colors.greyBG,
  },
  contentContainer: {
    paddingBottom: 82,
    backgroundColor: colors.transparent,
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 24,
    paddingBottom: 0,
  },
  loader: { paddingTop: 260 },
});

export default MovieDetailsScreen;
