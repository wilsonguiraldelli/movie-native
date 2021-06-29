import { SearchResponse, Movie } from "movies/types";

export type Props = {
  handleSearch: (value: string) => void,
  handlePagination: () => void,
  data: SearchResponse,
  isLoading: boolean,
  handleSelectMovie: (movie: Movie) => void,
}