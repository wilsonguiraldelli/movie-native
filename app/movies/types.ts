export type MoviesResponse = {
  page?: Number,
  results: Movie[],
  dates: {
    maximum?: string,
    minimum?: string,
  },
  pages_total?: Number,
  total_results?: Number,
}

export type Movie = {
  poster_path?: string | null
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: Number[],
  id: Number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path?: string,
  popularity: Number,
  vote_count: Number,
  video: boolean,
  vote_average: Number,
}