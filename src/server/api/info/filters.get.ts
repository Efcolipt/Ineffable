import { IGenre, ICountry } from '@/server/types'
import { request } from '@/server/utils/request'

interface IResponse {
  genres: IGenre[]
  countries: ICountry[]
}

export default defineEventHandler(async (): Promise<IResponse> => {
  const result = await request<IResponse>('/filters')

  return {
    genres: result?.genres ?? [],
    countries: result?.countries ?? [],
  }
})
