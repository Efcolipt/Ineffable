import { request } from '@/server/api/info/utils/request'

export default defineEventHandler(async () => {
  const result: any = await request('/filters')

  return {
    genres: result?.genres ?? [],
    countries: result?.countries ?? [],
  }
})
