import { ListCollectionInfoTopType } from '@/core/api/types/collection-info.d'
export default defineEventHandler(async (event) => {
  const { apiCollectionInfo } = useApiCollection()
  const query = getQuery(event)

  return await apiCollectionInfo.getTop({
    page: query.page ?? 1,
    type: query.type ?? ListCollectionInfoTopType.TOP_AWAIT_FILMS,
  })
})
