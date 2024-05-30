import React from 'react';
import { Text, Padding, AppButton, Margin, Image } from '@components';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from '@hooks/useTranslationHook';
import {
  GenericMainStackRouteProps,
  GenericMainStackScreenProps,
} from '@navigation/types';
import { routes } from '@navigation/routes';
import { HeartIcon } from '@assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '@store/actions';
import { getMoviesState } from '@store/movies/selectors';

const MovieDetailsScreen = () => {
  const navigation =
    useNavigation<GenericMainStackScreenProps<routes.DETAILS>>();
  const dispatch = useDispatch();
  const { params } = useRoute<GenericMainStackRouteProps<routes.DETAILS>>();
  const { favourites } = useSelector(getMoviesState);
  const { movie } = params;
  const isFavourite = favourites.includes(movie);
  const { t } = useTranslation();

  const likeMovie = () => {
    dispatch(addToFavourites({ movie }));
  };

  const dislikeMovie = () => {
    dispatch(removeFromFavourites({ movie }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Padding style={styles.imgContainer}>
        {/* <Image
          resizeMode='stretch'
          style={styles.imgBg}
          source={{ uri: movie['#IMG_POSTER'] }}
        /> */}
        <AppButton
          textSize={13}
          style={styles.back}
          br={2}
          bold
          onPress={() => {
            navigation.canGoBack() && navigation.goBack();
          }}
          variant='secondary'
          label={t('common.back').toUpperCase()}
        />

        <TouchableOpacity
          onPress={() => {
            !isFavourite ? likeMovie() : dislikeMovie();
          }}
          style={styles.like}
        >
          <HeartIcon
            fill={isFavourite ? colors.primary70 : undefined}
            color={isFavourite ? colors.primary70 : colors.white}
          />
        </TouchableOpacity>
      </Padding>
      <Padding pt={24} pl={24} pr={24} pb={112}>
        <Text mt={4} size={20} bold>
          {movie['#AKA']}
        </Text>
        <Margin mt={24} />

        <Text mb={4} bold>
          {t('common.actors')}
        </Text>
        <Text color={colors.grey50}>{movie['#ACTORS']}</Text>

        <Text bold mt={8}>
          {t('common.imbd')}
        </Text>

        <Text link color={colors.grey50}>
          {movie['#IMDB_IV']}
        </Text>
        <Text mt={8} link color={colors.grey50}>
          {movie['#IMDB_URL']}
        </Text>

        <Text mt={8}>
          {t('common.rank')}
          {': '}
          {movie['#RANK']}
        </Text>
      </Padding>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  imgBg: { width: '100%', height: '100%', position: 'absolute' },
  imgContainer: {
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  like: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    height: 30,
    width: 30,
  },
  container: {
    backgroundColor: colors.greyBG,
    flex: 1,
  },
  back: {
    width: 58,
    height: 30,
    paddingHorizontal: 8,
    position: 'absolute',
    borderColor: colors.white,
    top: 16,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
