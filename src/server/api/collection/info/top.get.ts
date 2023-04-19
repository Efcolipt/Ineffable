import {
  ListTopType,
  ICollectionByTop,
  IResponseWrapperCollection,
} from '@/server/types'
import { fetchCollection } from '@/server/utils/request'

type IResponse = IResponseWrapperCollection<ICollectionByTop[]>

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const result = await fetchCollection<IResponse>('/top', {
    query: {
      type: query.type ?? ListTopType.TOP_250_BEST_FILMS,
      page: query.page ?? 1,
    },
  })

  return result
})
