import { Movie, MoviesResponse } from "movies/types";

export type Props = {
  data: MoviesResponse,
  isLoading: boolean,
  handlePagination: () => void,
  handleSelectMovie: (movie: Movie) => void,
  handlePressSearch: () => void,
}