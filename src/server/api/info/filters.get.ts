import { IGenre, ICountry } from '@/server/types'
import { request } from '@/server/utils/request'

interface IResponse {
  genres: IGenre[]
  countries: ICountry[]
}

export default defineEventHandler(async () => {
  return await request<IResponse>('/filters')
})
