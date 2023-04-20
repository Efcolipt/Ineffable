import {
  ListTopType,
  ICollectionByTop,
  IResponseWrapperCollection,
} from '@/server/types'

export default defineEventHandler(async (event) => {
  const { fetchInfoCollectionApi } = useApi()
  const query = getQuery(event)

  return await fetchInfoCollectionApi<
    IResponseWrapperCollection<ICollectionByTop[]>
  >('/top', {
    query: {
      type: query.type ?? ListTopType.TOP_250_BEST_FILMS,
      page: query.page ?? 1,
    },
  })
})
