import { IGenre, ICountry } from '@/server/types'

export default defineEventHandler(async () => {
  const { fetchInfoCollectionApi } = useApi()

  return await fetchInfoCollectionApi<{
    genres: IGenre[]
    countries: ICountry[]
  }>('/filters')
})
