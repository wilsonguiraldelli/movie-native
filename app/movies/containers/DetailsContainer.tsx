import React from 'react';
import { DetailsScreen } from 'movies/screens';

import { useSelector } from 'react-redux';

import { Movie } from 'movies/types';

function DetailsContainer(): React.ReactElement {

  const movie = useSelector<any, Movie>(({ movies }) => movies.details.movie);

  return (
    <DetailsScreen
      movie={movie}
    />
  )
}

export default DetailsContainer;