import apiCollection from '@openmoviedb/kinopoiskdev_client'

export default () => {
  const config = useRuntimeConfig()
  const apiKinopoisk = new apiCollection.KinopoiskDev(config.INFO_BD.API_KEY)
  const queryBuilder = new apiCollection.MovieQueryBuilder()
  const selectQueryMain: apiCollection.SelectFields<apiCollection.MovieFields>[] =
    [
      'id',
      'backdrop.url',
      'name',
      'shortDescription',
      'genres.name',
      'year',
      'countries.name',
      'votes.kp',
      'ageRating',
      'movieLength',
    ]

  const getAwaitable = async () => {
    const query = queryBuilder
      .select(selectQueryMain)
      .filterExact('year', new Date().getFullYear() - 1)
      .filterRange('rating.imdb', [6, 9])
      .filterExact('shortDescription', apiCollection.SPECIAL_VALUE.NOT_NULL)
      .filterExact('type', 'movie')
      .filterExact('backdrop.url', apiCollection.SPECIAL_VALUE.NOT_NULL)
      .sort('votes.filmCritics', apiCollection.SORT_TYPE.DESC)
      .paginate(1, 16)
      .build()

    try {
      return (await apiKinopoisk.movie.getByFilters(query)).data
    } catch {
      return {
        docs: [],
      }
    }
  }

  const getIndexPageMovies = async () => {
    const query = queryBuilder
      .select(selectQueryMain)
      .filterRange('year', [
        new Date().getFullYear() - 1,
        new Date().getFullYear(),
      ])
      .filterExact('backdrop.url', apiCollection.SPECIAL_VALUE.NOT_NULL)
      .sort('rating.kp', apiCollection.SORT_TYPE.DESC)
      .paginate(1, 16)
      .build()

    try {
      return (await apiKinopoisk.movie.getByFilters(query)).data
    } catch {
      return {
        docs: [],
      }
    }
  }

  const getById = async (id: number) => {
    return await apiKinopoisk.movie.getById(id)
  }

  return {
    getAwaitable,
    getIndexPageMovies,
    getById,
  }
}
