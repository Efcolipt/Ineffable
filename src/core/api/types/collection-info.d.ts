
export enum ListCollectionInfoType {
  MOVIE = 'movie',
  TV_SERIES = 'tv-series',
  CARTOON = 'cartoon',
  ANIME = 'anime',
  ANIMATED_SERIES = 'animated-series',
  TV_SHOW = 'tv-show'
}

export interface ICollectionInfoTrailer {
  url: string
  name: string
}

export interface ICollectionInfoImage {
  url: string 
}

export interface ICollectionInfoRating {
  kp: number | null
  imdb: number | null 
  await: number | null
}

export interface ICollectionInfoExternalID {
  kpHD: string | null
  imdb: string | null
  tmdb: string | null
}

export interface ICollectionInfoGenre {
  name: string
}

export interface ICollectionInfoCountry {
  name: string
}

export interface ICollectionInfoHealthy {
  status: "ok" | "error"
}
export type IResponseWrapperCollectionInfo<T> = {
  docs: T[]
  total: number
  limit: number
  page: number
  pages: number
}

export type ICollectionInfoBase<T = any> = {
  externalId: ICollectionInfoExternalID,
  rating: ICollectionInfoRating
  type: ListCollectionInfoType
  countries: ICollectionInfoCountry[]
  genres: ICollectionInfoGenre[]
  slogan: string | null
  name: string
  shortDescription: string | null
  movieLength: number | null
  year: number
  ageRating: number | null
} & T

export interface ICollectionInfoByID  {}
export interface ICollectionInfoByTop  {
  backdrop: ICollectionInfoImage
}
export interface ICollectionInfoSimilar  {}
export interface ICollectionInfoBySearch  {}
