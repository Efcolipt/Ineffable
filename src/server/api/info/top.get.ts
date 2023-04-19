import {
  ListTopType,
  ICollectionByTop,
  IResponseWrapperCollection,
} from '@/server/types'
import { request } from '@/server/utils/request'

type IResponse = IResponseWrapperCollection<ICollectionByTop[]>

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const result = await request<IResponse>('/top', {
    query: {
      type: query.type ?? ListTopType.TOP_250_BEST_FILMS,
      page: query.page ?? 1,
    },
  })

  return result
})
