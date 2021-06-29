import React, { useEffect, useCallback, useState } from 'react';
import { SearchScreen } from 'movies/screens';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useDebounce } from 'use-debounce';

import { search as thunkSearch } from 'movies/store/thunks';
import { search, details } from 'movies/store/actions';
import { SearchResponse, Movie } from 'movies/types';

function ListContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentPage = useSelector<any, number>(({ movies }) => movies.search.currentPage);
  const data = useSelector<any, SearchResponse>(({ movies }) => movies.search.data);
  const isLoading = useSelector<any, boolean>(({ movies }) => movies.search.isLoading);

  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchText, _undebounceSearchText] = useDebounce<string>(searchValue, 1000);

  const handleSearch = useCallback(value => setSearchValue(value), []);

  const getMovies = async () => {
    await dispatch(search.get.request(debouncedSearchText))
  }

  const handlePagination = () => {
    dispatch(search.setCurrentPage(currentPage + 1))
  }

  const getMoviesByPage = async () => {
    await dispatch(thunkSearch.handlePaginate(debouncedSearchText))
  }

  const handleSelectMovie = (movie: Movie) => {
    dispatch(details.setCurrentMovie(movie))
    navigation.navigate('movies-details')
  }

  useEffect(() => {
    if (debouncedSearchText.length > 1) getMovies();
  }, [debouncedSearchText])

  useEffect(() => {
    if (debouncedSearchText.length > 1) getMoviesByPage();
  }, [currentPage])

  return (
    <SearchScreen
      handleSearch={handleSearch}
      handlePagination={handlePagination}
      handleSelectMovie={handleSelectMovie}
      data={data}
      isLoading={isLoading}
    />
  )
}

export default ListContainer;