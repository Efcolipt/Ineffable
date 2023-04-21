import { ICollectionBySearch, IResponseWrapperCollection } from '@/server/types'

export default defineEventHandler(async (event) => {
  const { fetchInfoCollectionApi } = useApi()
  const query = getQuery(event)

  return await fetchInfoCollectionApi<
    IResponseWrapperCollection<ICollectionBySearch[]> & {
      keyword: string
      searchFilmsCountResult: number
    }
  >(
    '/search-by-keyword',
    {
      query: {
        keyword: query.keywords,
        page: query.page ?? 1,
      },
    },
    'v1'
  )
})
