export interface ICollectionVideoPlayer {
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

export type IResponseWrapperCollectionVideo<T> = {
  results: T
}
