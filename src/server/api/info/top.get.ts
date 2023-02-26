import { request } from '@/server/api/info/utils/request'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const result: any = await request('/top', {
    query: {
      type: query.type ?? 'TOP_250_BEST_FILMS',
      page: query.page ?? 1,
    },
  })

  return result?.films ?? []
})
