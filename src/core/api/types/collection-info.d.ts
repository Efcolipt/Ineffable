export enum ListCollectionInfoTopType {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
  TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

export interface ICollectionInfoGenre {
  genre: string
}

export interface ICollectionInfoCountry {
  country: string
}

export enum ListCollectionInfoType {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  SERIAL = 'SERIAL',
  UNKNOWN = 'UNKNOWN',
}

export interface ICollectionInfoByID {
  kinopoiskId: number
  imdbId: string
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  coverUrl: string
  logoUrl: string
  reviewsCount: number
  ratingGoodReview: number
  ratingGoodReviewVoteCount: number
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  ratingImdb: number
  ratingImdbVoteCount: number
  ratingFilmCritics: number
  ratingFilmCriticsVoteCount: number
  ratingAwait: number
  ratingAwaitCount: number
  ratingRfCritics: number
  ratingRfCriticsVoteCount: number
  webUrl: string
  year: number
  filmLength: number
  slogan: string
  description: string
  shortDescription: string
  editorAnnotation: string
  isTicketsAvailable: boolean
  productionStatus: string
  type: ListTypeCollection
  ratingMpaa: string
  ratingAgeLimits: string
  hasImax: false
  has3D: false
  lastSync: string
  countries: ICountry[]
  genres: IGenre[]
  startYear: number
  endYear: number
  serial: boolean
  shortFilm: boolean
  completed: boolean
}

export interface ICollectionInfoByTop {
  filmId: number
  nameRu: string
  nameEn: string
  year: string
  filmLength: string
  countries: ICountry[]
  genres: IGenre[]
  rating: string
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
  ratingChange: null
}

export interface ICollectionInfoSimilarByID {
  filmId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}

export interface ICollectionInfoBySearch {
  filmId: number
  nameRu: string
  nameEn: string
  type: ListTypeCollection
  year: string
  description: string
  filmLength: string
  countries: ICountry[]
  genres: IGenre[]
  rating: string
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
}

export type IResponseWrapperCollectionInfo<T> = {
  docs: T
  total: number
  limit: number
  page: number
  pages: number
}
