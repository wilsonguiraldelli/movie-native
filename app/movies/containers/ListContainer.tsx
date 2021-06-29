import React, { useEffect } from 'react';
import { ListScreen } from 'movies/screens';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { list as thunkList } from 'movies/store/thunks';
import { list, details } from 'movies/store/actions';

import { Movie, MoviesResponse } from 'movies/types';

function ListContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentPage = useSelector<any, number>(({ movies }) => movies.list.currentPage);
  const data = useSelector<any, MoviesResponse>(({ movies }) => movies.list.data);
  const isLoading = useSelector<any, boolean>(({ movies }) => movies.list.isLoading);

  const getUpcomingMovies = async () => {
    await dispatch(thunkList.handleUpcoming())
  }

  const handlePagination = () => {
    dispatch(list.setCurrentPage(currentPage + 1))
  }

  const handleSelectMovie = (movie: Movie) => {
    dispatch(details.setCurrentMovie(movie))
    navigation.navigate('movies-details')
  }

  const handleSearch = (value: string) => {
    console.log('VALUE', value);
  }

  useEffect(() => {
    getUpcomingMovies()
  }, [currentPage])

  return (
    <ListScreen
      isLoading={isLoading}
      data={data}
      handlePagination={handlePagination}
      handleSelectMovie={handleSelectMovie}
      handleSearch={handleSearch}
    />
  )
}

export default ListContainer;