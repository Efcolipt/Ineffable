import { ListTopType } from '~/server/types'

export default defineEventHandler(async (event) => {
  const { ApiCollectionService } = useApi()
  const query = getQuery(event)

  return await ApiCollectionService.getTop({
    page: query.page ?? 1,
    type: query.type ?? ListTopType.TOP_AWAIT_FILMS,
  })
})
