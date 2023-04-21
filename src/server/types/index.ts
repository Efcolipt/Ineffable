export enum ListTopType {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
  TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

export interface IGenre {
  genre: string
}

export interface ICountry {
  country: string
}

export enum ListTypeCollection {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  SERIAL = 'SERIAL',
  UNKNOWN = 'UNKNOWN',
}

export interface ICollectionByID {
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

export interface ICollectionByTop {
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

export interface ICollectionSimilarByID {
  filmId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}

export interface ICollectionBySearch {
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

export interface ICollectionPlayer {
  link: string
  kinopoisk_id: string
  date: Date
  camrip: '1' | '0'
  ads: '1' | '0'
  trailer: '1' | '0'
  block: string
  serial: '1' | '0'
  end: '1' | '0'
  quality: string
  translation: string
  studio: string
  max_qual: string
  files_count: string
  last_season: string
  last_episode: string
  episodes: {
    [x: string]: {
      [x: string]: string
    }
  }
  info: {
    rus: string
    orig: string
    alter: string
    ukr: string
    year: string
    country: string
    director: string
    genre: string
    actors: string
    slogan: string
    premiere: string
    age: string
    time: string
    poster: string
    screenshot: string
    rating: {
      rating_kp: string
      vote_num_kp: string
      rating_imdb: string
      vote_num_imdb: string
    }
  }
}

export type IResponseWrapperCollectionVideo<Collection> = {
  results: Collection
}

export type IResponseWrapperCollection<Collection> = Collection extends any[]
  ? {
      pagesCount: number
      films: Collection
    }
  : Collection | null
